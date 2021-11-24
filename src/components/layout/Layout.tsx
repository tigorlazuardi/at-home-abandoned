import clsx from 'clsx'
import * as React from 'react'

import SideBar from '../Sidebar/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	const [dark, setDark] = React.useState(false)
	return (
		<div
			className={clsx({
				['h-screen']: true,
				dark: dark,
				['bg-dark']: dark,
			})}
		>
			<SideBar dark={dark} on_click={() => setDark(!dark)} />
			<div className='sm:pl-16'>
				{children}
			</div>
		</div>
	)
}
