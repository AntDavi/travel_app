'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import React, { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log('Clicou')
    }

    return (
        <nav className="flexBetween max-container padding-container relative z-300 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />

            </Link>

            {/* Lista de links de navegação na versão desktop */}
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    // Cada item da lista é um link de navegação
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCnter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {/* O conteúdo do link é o rótulo do link */}
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            {/* Ícone de menu */}
            <div onClick={toggleMenu}>
                {/* <div> */}
                <Image
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer lg:hidden"
                />
            </div>

            {/* Menu lateral */}
            {menuOpen && (
                <div className="fixed top-0 right-0 h-full w-64 bg-slate-300 z-50 p-5 flex items-center justify-between flex-col">
                    <div onClick={toggleMenu}>
                        <Image src="close-black.svg" alt="close" width={32} height={32} />
                    </div>
                    <ul className="">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key} className="mt-3 mb-5 text-center">
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="btn_dark_green"
                    />
                </div>
            )}
        </nav>
    )
}

export default Navbar;