import * as React from 'react'

import SideBar from '../Sidebar'

export default function Layout({ children, dark }: { children: React.ReactNode, dark?: boolean }) {
	return (
		<div className={dark ? 'dark' : ''}>
			<SideBar />
			{children}
		</div>
	)
}
