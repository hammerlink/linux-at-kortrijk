import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
	return (
		<>
			{allAuthors.map(a =>
				<AuthorLayout key={a._id} content={coreContent(a)}>
					<MDXLayoutRenderer code={a.body.code} />
				</AuthorLayout>
			)
			}
		</>
	)
}
