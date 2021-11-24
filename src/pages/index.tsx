import * as React from 'react'

import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'
import Introductory from '@/components/MainPage/Introductory'

export default function LearnPage(): JSX.Element {
	return (
		<Layout>
			<Seo />
			<div className='container py-2'>
				<Introductory />
			</div>
		</Layout>
	)
}
