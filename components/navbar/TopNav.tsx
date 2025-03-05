'use client'

import { Button, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'

import Link from 'next/link'
import NavLink from './NavLink'

export default function TopNav() {
	return (
		<Navbar
			maxWidth="full"
			className="bg-black"
			classNames={{
				item: [
					'text-xl',
					'text-white',
					'uppercase',
					'data-[active=true]:text-yellow-200',
				],
			}}
		>
			<NavbarBrand as={Link} href="/">
				<div className="font-bold text-3xl flex">
					<span className="text-gray-200">Web developer</span>
				</div>
			</NavbarBrand>
			<NavbarContent justify="center">
				<NavLink href="/" label="Home" />
				<NavLink href="/portfolio" label="Portfolio" />
				<NavLink href="/cv" label="CV" />
			</NavbarContent>
			<NavbarContent justify="end">
				<Button
					as={Link}
					href="/login"
					variant="bordered"
					className="text-white"
				>
					Login
				</Button>
			</NavbarContent>
		</Navbar>
	)
}
