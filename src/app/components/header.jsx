"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaX } from "react-icons/fa6";

export default function Header() {
    const currentPath = usePathname();
    const [isMenuOpen, setMenuOpen] = useState();
    const [isClicked, setClicked] = useState();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setClicked(!isClicked);
    };

    return (
        <div className='flex justify-between items-center lg:py-7 md:py-5 py-3 bg-black text-white lg:px-16 md:px-8 px-4 shadow-lg shadow-slate-300'>
            <h2 className='lg:w-[25%] font-bold text-[#FD6F00] lg:text-3xl md:text-xl text-lg md:text-left text-center'>Blogs Corner</h2>
            <ul className='lg:w-[50%] lg:block hidden lg:flex flex-row justify-center lg:gap-8 md:gap-6 gap-2 lg:text-xl md:text-lg text-base font-medium'>
                <Link href="/" className={`${"/" === currentPath && "border-b-2 border-white"} px-1`}>
                    <li>Home</li>
                </Link>
                <Link href="/createPost" className={`${"/createPost" === currentPath && "border-b-2 border-white"} px-1`}>
                    <li>Create Post</li>
                </Link>
                <Link href="/aboutUs" className={`${"/aboutUs" === currentPath && "border-b-2 border-white"} px-1`}>
                    <li>About Us</li>
                </Link>
                <Link href="/contactUs" className={`${"/contactUs" === currentPath && "border-b-2 border-white"} px-1`}>
                    <li>Contact Us</li>
                </Link>
            </ul>
            <h1 className='lg:w-[25%] md:block hidden'></h1>
            <div className="lg:hidden block" onClick={toggleMenu}>
                {
                    isClicked ? <FaX className="text-white md:text-xl text-lg" /> : <FaBars className="text-white md:text-xl text-lg" />
                }
                {
                    isMenuOpen && (
                        <div style={{ zIndex: 9999 }} className="lg:hidden absolute md:top-[70px] top-14 md:right-6 right-4 px-4 md:py-6 py-4 md:w-44 w-36 rounded-md shadow-lg border-4 border-black bg-slate-200">
                            <ul className='lg:w-[50%] lg:hidden visible flex flex-col text-black justify-center lg:gap-8 md:gap-3 gap-2 lg:text-xl md:text-lg text-base font-medium'>
                                <Link href="/" className={`${"/" === currentPath && "underline"}`}>
                                    <li>Home</li>
                                </Link>
                                <Link href="/createPost" className={`${"/createPost" === currentPath && "underline"}`}>
                                    <li>Create Post</li>
                                </Link>
                                <Link href="/aboutUs" className={`${"/aboutUs" === currentPath && "underline"}`}>
                                    <li>About Us</li>
                                </Link>
                                <Link href="/contactUs" className={`${"/contactUs" === currentPath && "underline"}`}>
                                    <li>Contact Us</li>
                                </Link>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
