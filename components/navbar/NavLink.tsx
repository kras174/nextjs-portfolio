'use client'

import { Link, NavbarItem } from '@heroui/react'

import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {
	href: string
	label: string
}

export default function NavLink({ href, label }: Props) {
	const pathname = usePathname()
	return (
		<NavbarItem as={Link} href={href} isActive={pathname === href}>
			{label}
		</NavbarItem>
	)
}
