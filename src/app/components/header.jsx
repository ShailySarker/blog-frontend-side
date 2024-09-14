"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    return (
        <div className='flex justify-between items-center lg:py-7 md:py-5 py-3 bg-black text-white lg:px-16 md:px-8 px-2'>
            <h2 className='w-[25%] font-bold text-[#FD6F00] lg:text-3xl md:text-xl text-lg md:text-left text-center'>Blogs Corner</h2>
            <ul className='w-[50%] flex flex-row justify-center lg:gap-8 md:gap-6 gap-4 lg:text-xl md:text-lg text-base font-medium'>
                <Link href="/" className={`${"/" === currentPath && "border-b-2 border-white" } px-1`}>
                    <li>Home</li>
                </Link>
                <Link href="/createPost" className={`${"/createPost" === currentPath && "border-b-2 border-white" } px-1`}>
                    <li>Create Post</li>
                </Link>
            </ul>
            <h1 className='w-[25%]'></h1>
        </div>
    )
}
