import * as React from 'react'
import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs'
import { FaFire, FaWrench } from 'react-icons/fa'

interface SideBarProp {
	icon_size?: number
}

const SideBar = (prop: SideBarProp) => {
	const icon_size = prop.icon_size ?? 28
	return (
		<div className='fixed top-0 left-0 flex flex-col w-16 h-screen m-0 text-white shadow-lg bg-discord-800'>
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
		<div
			className={`flex relative justify-center items-center
					mx-auto w-12 h-12 text-green-500 rounded-3xl
					transition-all duration-200 bg-discord-700 hover:bg-green-600
					hover:text-white hover:rounded-xl ease-liner group`}
		>
			{icon}
			<Tooltip text={text}></Tooltip>
		</div>
	)
}

interface TooltipProp {
	text: string
}

const Tooltip = ({ text }: TooltipProp) => (
	<span
		className={`absolute w-auto p-2 m-2 min-w-max left-14
						rounded-md shadow-md text-white bg-discord-900
						text-xs lg:text-lg fon-bold transition-all duration-100
						scale-0 origin-right group-hover:scale-100 sm-max:hidden`}
	>
		{text}
	</span>
)

export default SideBar
