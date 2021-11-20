import { ReactElement } from 'react'
import { FaHome, FaWrench } from 'react-icons/fa'

export interface EntryItem {
	icon: ReactElement
	size: number
	tooltip_text: string
	link_target?: string
	is_active: (route: string) => boolean
}

const entries: EntryItem[] = [
	{
		icon: <FaHome />,
		size: 28,
		tooltip_text: 'Home',
		link_target: '/',
		is_active: (route: string) => route === '/',
	},
	{
		icon: <FaWrench />,
		size: 28,
		tooltip_text: 'Components',
		link_target: '/components',
		is_active: (route: string) => route === '/components',
	},
]

export default entries
