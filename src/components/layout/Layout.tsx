import clsx from 'clsx'
import * as React from 'react'

import SideBar from '../Sidebar/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	const [dark, setDark] = React.useState(true)
	React.useEffect(() => {
		const falsey = window.localStorage.getItem('dark_mode') === 'false'
		setDark(!falsey)
		!falsey && window.localStorage.setItem('dark_mode', 'true')
	}, [dark])
	return (
		<div
			className={clsx({
				['h-screen']: true,
				dark: dark,
				['bg-discord-900']: dark,
			})}
		>
			<SideBar
				dark={dark}
				on_click={() => {
					const next = !dark
					setDark(next)
					next
						? window.localStorage.setItem('dark_mode', 'true')
						: window.localStorage.setItem('dark_mode', 'false')
				}}
			/>
			<div className='sm:pl-16'>{children}</div>
		</div>
	)
}
