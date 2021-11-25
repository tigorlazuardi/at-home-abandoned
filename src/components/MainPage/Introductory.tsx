import * as React from 'react'

export default function Introductory() {
	return (
		<section>
			<header className='divide-y-4'>
				<h1 className='py-4'>Welcome to my Humble Abode!</h1>
				<p className='py-4'>
					This site is a showcase of my personal projects while also
					doubles as monitoring / administration tools from remote.
					The first section in the sidebar is public, meaning anyone
					can access, while the second section is private, requiring
					authentications to enter.
				</p>
			</header>
		</section>
	)
}
