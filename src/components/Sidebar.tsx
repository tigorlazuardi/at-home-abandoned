import * as React from 'react'
import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs'
import { FaFire, FaWrench } from 'react-icons/fa'

interface SideBarProp {
	icon_size?: number
}

const SideBar = (prop: SideBarProp) => {
	const icon_size = prop.icon_size ?? 28
	return (
		<div className='flex fixed top-0 left-0 flex-col m-0 w-16 h-screen text-white shadow-lg bg-white-800 dark:text-dark dark:bg-discord-800'>
			<SideBarIcon text='Fire' icon={<FaFire size={icon_size} />} />
			<SideBarIcon text='Wrench' icon={<FaWrench size={icon_size} />} />
			<SideBarIcon text='Plus' icon={<BsPlus size={icon_size} />} />
			<SideBarIcon text='Lightning' icon={<BsFillLightningFill size={icon_size} />} />
			<SideBarIcon text='Gear' icon={<BsGearFill size={icon_size} />} />
		</div>
	)
}

interface SideBarIconProp {
	icon: React.ReactElement
	text: string
}

const SideBarIcon = ({ icon, text }: SideBarIconProp) => {
	return (
		<div className='my-1'>
			<div
				className={
					'sidebar-icons group'
				}
			>
				{icon}
				<Tooltip text={text}></Tooltip>
			</div>
		</div>
	)
}

interface TooltipProp {
	text: string
}

const Tooltip = ({ text }: TooltipProp) => (
	<span
		className={
			'absolute left-14 p-2 m-2 w-auto min-w-max text-xs text-white rounded-md shadow-md transition-all duration-100 origin-right scale-0 bg-discord-900 lg:text-lg fon-bold group-hover:scale-100 sm-max:hidden'
		}
	>
		{text}
	</span>
)

export default SideBar
