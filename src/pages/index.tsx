import Image from 'next/image'
import * as React from 'react'

import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

export default function LearnPage(): JSX.Element {
	const image = 'https://via.placeholder.com/64x64'
	return (
		<Layout dark={false}>
			<Seo />
			<main className='bg-white dark:bg-dark dark:text-white text-dark'>
				<section className='container py-2'>
					<button className='py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-300'>
						This is a button
					</button>

					<div
						className='relative py-3 px-4 my-5 text-red-700 bg-red-100 rounded border border-red-400'
						role='alert'
					>
						<strong className='font-bold'>Alert!</strong>{' '}
						<span className='block sm:inline'>Please Update your password!</span>
					</div>

					<div className='flex p-6 mx-auto max-w-sm bg-white rounded-lg shadow-xl hover:animate-bounce'>
						<div className='flex-shrink-0'>
							<Image
								unoptimized
								src={image}
								alt='placeholder 64x64'
								width='64'
								height='64'
								className='w-12 h-12'
							/>
						</div>
						<div className='pt-1 ml-6'>
							<h4 className='text-xl text-gray-900'>Tigor</h4>
							<p className='text-base text-gray-600'>You have a new message!</p>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	)
}
