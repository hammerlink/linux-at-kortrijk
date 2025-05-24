import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
          {allAuthors.sort(sortAuthorsByName).map((a) => (
            <AuthorLayout key={a._id} content={coreContent(a)}>
              <MDXLayoutRenderer code={a.body.code} />
            </AuthorLayout>
          ))}
        </div>
      </div>
    </>
  )
}

function sortAuthorsByName(a: Authors, b: Authors) {
  if (a.name! < b.name!) {
    return -1
  }
  if (a.name! > b.name!) {
    return 1
  }
  return 0
}
