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
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {/* O conteúdo do link é o rótulo do link */}
                        {link.label}
                    </Link>
                ))}
            </ul>

            {/* <div className="hidden flex-col lg:flex">
                <button className="regular-16 text-grayh-50 transition-all hover:font-bold">PT</button>
                <button className="regular-16 text-grayh-50 transition-all hover:font-bold">EN</button>
            </div> */}

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            {/* Ícone de menu */}
            <div onClick={toggleMenu} className="inline-block cursor-pointer lg:hidden">
                {/* <div> */}
                <Image
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                />
            </div>

            {/* Menu lateral */}
            {menuOpen && (
                <div className="fixed top-0 right-0 h-full w-64 bg-slate-100 z-50 p-5 flex items-center justify-between flex-col">
                    <div onClick={toggleMenu} className="flex content-end w-full">
                        <Image src="close-black.svg" alt="close" width={32} height={32} />
                    </div>
                    <ul className="">
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold mb-5">
                                {link.label}
                            </Link>
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
            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    )
}

export default Navbar;