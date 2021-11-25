import * as React from 'react'

import Layout from '@/components/layout/Layout'
import CV from '@/components/MainPage/CV'
import Introductory from '@/components/MainPage/Introductory'
import Seo from '@/components/Seo'

export default function LearnPage(): JSX.Element {
	return (
		<Layout>
			<Seo />
			<div className='container py-2 md:px-36 dark:text-white'>
				<Introductory />
				<CV />
			</div>
		</Layout>
	)
}
