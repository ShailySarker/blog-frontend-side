import React from 'react'
import { FaDiscord, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div>
      <div className=" bg-slate-500 text-white lg:py-12 md:py-8 py-6 lg:flex lg:flex-row lg:justify-between grid md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-x-24 md:gap-y-14 gap-6 lg:px-12 md:px-7 px-5">
        <div className="md:mt-2 flex flex-col md:items-start items-center lg:w-[22%]">
          <h2 className="font-bold text-[#FD6F00] lg:text-3xl md:text-2xl text-xl">Book Corner</h2>
          <div className="lg:mt-6 md:mt-5 mt-4">
            <p className="text-justify lg:text-base text-sm/loose font-medium">Blogs Corner is a dynamic platform where users can explore a variety of topics, share their thoughts, and engage with a diverse community.</p>
          </div>
        </div>
        <div>
          <h2 className="lg:text-2xl md:text-xl text-lg font-bold">Quick Links</h2>
          <div className="flex md:gap-20 gap-28 lg:mt-7 md:mt-5 mt-3">
            <div className="flex flex-col lg:gap-3 md:gap-2 gap-[6px] lg:text-lg md:text-base text-sm font-medium">
              <ul className="">                  All Posts                </ul>
              <ul className="">About Us                </ul>
              <ul className="">                  Contact Us               </ul>
              <ul className="">Help                </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="lg:text-2xl md:text-xl text-lg font-bold">Reach Us</h2>
          <div className="flex flex-col lg:gap-3 md:gap-2 gap-[6px] lg:text-lg md:text-base text-sm lg:mt-7 md:mt-5 mt-3 font-medium">
            <p className="flex items-center gap-2"><FaEnvelope />blogscorner@gmail.com</p>
            <p className="flex items-center gap-2"><FaPhone /> +880 0000000000</p>
            <p></p>
          </div>
          <div className="lg:mt-6 md:mt-4 mt-3 flex lg:gap-7 md:gap-6 gap-5">
            <FaFacebook className="lg:text-2xl text-xl" />
            <FaInstagram className="lg:text-2xl text-xl" />
            <FaDiscord className="lg:text-2xl text-xl" />
            <FaYoutube className="lg:text-2xl text-xl" />
          </div>
        </div>
        <div>
          <h2 className="lg:text-2xl md:text-xl text-lg font-bold">Legal</h2>
          <div className="flex flex-col lg:gap-3 md:gap-2 gap-[6px] lg:text-lg md:text-base text-sm lg:mt-7 md:mt-5 mt-3 font-medium">
            <ul className="">                Terms & Conditions              </ul>
            <ul className="">                Privacy Policy              </ul>
            <ul className="">                Cancellation & Refund Policy              </ul>
          </div>
        </div>
      </div>
      <div className='bg-black lg:py-4 md:py-3 py-2'>
        <p className='text-[#FFFFFF] text-center lg:text-base md:text-sm text-xs'>© 2024 <span className='font-bold text-[#FD6F00]'>Blogs Corner</span>. All Rights Reserved.</p>
      </div>
    </div>
  )
}
