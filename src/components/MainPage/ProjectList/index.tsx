import React from 'react'

import ProjectDisplayCard from '@/components/cards/ProjectDisplayCard'

export default function ProjectList() {
	return (
		<section>
			<header className='divide-y-4'>
				<h1 className='py-4'>Projects</h1>
				<p className='py-4'>
					Following projects are the things I am working on or have
					done.
				</p>
			</header>
			<div className='flex'>
				<ProjectDisplayCard />
				<ProjectDisplayCard />
				<ProjectDisplayCard />
				<ProjectDisplayCard />
				<ProjectDisplayCard />
				<ProjectDisplayCard />
			</div>
		</section>
	)
}
