import Image from 'next/image'
import * as React from 'react'

import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'
import SideBar from '@/components/Sidebar'

export default function LearnPage(): JSX.Element {
	const image = 'https://via.placeholder.com/350x150'
	return (
		<Layout>
			<Seo templateTitle='Learn' description='Learns Tailwind CSS with Next JS' />

			<SideBar></SideBar>
			<div className='container py-2'>
				<button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-300'>
					This is a button
				</button>

				<div
					className='relative px-4 py-3 my-5 text-red-700 bg-red-100 border border-red-400 rounded'
					role='alert'
				>
					<strong className='font-bold'>Alert!</strong>{' '}
					<span className='block sm:inline'>Please Update your password!</span>
				</div>

				<div className='flex max-w-sm p-6 mx-auto bg-white rounded-lg shadow-xl hover:animate-bounce'>
					<div className='flex-shrink-0'>
						<Image
							unoptimized
							loader={() => image}
							src={image}
							alt='placeholder 350x150'
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
			</div>
		</Layout>
	)
}
