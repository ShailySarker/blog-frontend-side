import Image from 'next/image';
import React from 'react';
import banner from "../../../public/image/banner.jpg";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="flex lg:flex-row flex-col items-center lg:gap-20 md:gap-12 gap-8 lg:my-20 md:mt-6 md:mb-16 mt-2 mb-12">
            <div className="lg:w-[50%] md:w-[80%] w-[100%]">
                <Image src={banner} alt="banner image" />
            </div>
            <div className="lg:w-[50%] w-[100%]">
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-black">Welcome to <span className="font-bold text-[#FD6F00]">Blogs Corner</span></h2>
                <p className="text-gray-700 lg:mt-5 md:mt-4 mt-3 text-justify lg:text-lg/loose md:text-base/relaxed text-base">Blogs Corner is a dynamic platform where users can explore a variety of topics, share their thoughts, and engage with a diverse community. Whether you are looking for insights on technology, lifestyle, personal growth, or creative writing, Blogs Corner offers a space for both readers and writers to connect.</p>
                <Link href="/createPost">
                    <Button className="lg:mt-8 md:mt-6 mt-4 w-36 font-semibold md:text-lg">Get Start</Button>
                </Link>
            </div>
        </div>
    )
}
