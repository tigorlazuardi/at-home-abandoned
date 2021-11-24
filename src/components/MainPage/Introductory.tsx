import * as React from 'react'

export default function Introductory() {
	return (
		<section>
			<header className='divide-y-2 md:px-16'>
				<h1 className='py-4 dark:text-white'>
					Welcome to my Humble Abode!
				</h1>
				<p className='py-4 dark:text-white'>
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
