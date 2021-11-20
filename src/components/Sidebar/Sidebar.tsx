import clsx from 'clsx'
import { useRouter } from 'next/router'
import * as React from 'react'

import entries from './Entries'

const SideBar = () => {
	return (
		<nav className='fixed top-0 left-0 flex flex-col w-16 h-screen m-0 text-white shadow-lg bg-white-800 dark:text-dark dark:bg-discord-800'>
			{entries.map((v, i) => (
				<SideBarIcon
					key={i}
					text={v.tooltip_text}
					icon={v.icon}
					link_target={v.link_target}
					is_active={v.is_active}
				/>
			))}
		</nav>
	)
}

interface SideBarIconProp {
	icon: React.ReactElement
	text: string
	link_target?: string
	is_active?: (route: string) => boolean
}

const SideBarIcon = ({
	icon,
	text,
	link_target,
	is_active,
}: SideBarIconProp) => {
	const router = useRouter()
	const active = is_active?.(router.route) || false
	return (
		<div className='my-1'>
			<div
				className={clsx({
					'sidebar-icons group': true,
					'bg-green-500 dark:bg-green-500': active,
					'text-white dark:text-white': active,
				})}
				onClick={() => {
					link_target && router.push(link_target)
				}}
			>
				{icon}
				<Tooltip text={text} />
			</div>
		</div>
	)
}

interface TooltipProp {
	text: string
}

const Tooltip = ({ text }: TooltipProp) => (
	<span className={'sidebar-tooltip-scale-0 group-hover:scale-100'}>
		{text}
	</span>
)

export default SideBar
