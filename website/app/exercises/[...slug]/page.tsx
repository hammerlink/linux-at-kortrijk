import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allExercises } from 'contentlayer/generated'
import type { Exercise } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import ExerciseLayout from '@/layouts/ExerciseLayout'

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const post = allExercises.find((p) => p.slug === slug)
  if (!post) {
    return
  }
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      url: './',
      images: [],
    },
  }
}

export const generateStaticParams = async () => {
  return allExercises.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const contents = allCoreContent(allExercises)
  const postIndex = contents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  console.log('Regenerating...', contents)
  const prev = contents[postIndex - 1]
  const next = contents[postIndex + 1]
  const post = allExercises.find((p) => p.slug === slug) as Exercise
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExerciseLayout content={mainContent} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </ExerciseLayout>
    </>
  )
}
