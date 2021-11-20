import * as React from 'react'

import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

export default function LearnPage(): JSX.Element {
	return (
		<Layout dark={true}>
			<Seo />
			<main className='bg-white dark:bg-dark dark:text-white text-dark'>
				<section className='container py-2'>
					<button className='py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-300'>
						This is a button
					</button>
				</section>
			</main>
		</Layout>
	)
}
