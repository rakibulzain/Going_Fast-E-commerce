import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-black/50'>
            <div className='flex justify-around items-start  text-white p-10 gap-5'>
                <div className=''>
                    <div>
                        <img className='w-20 mb-3' src="src/assets/logofornav.png" alt="logo" />
                    </div>
                    <p>Post office Road,Gulshan-1,Dhaka 1200</p>
                    <p className='mb-5'>Bangladesh</p>
                    <p>Call - +8801869368630</p>
                    <p>Email - goingfast@gmail.com</p>
                </div>
                <div>
                    <h1 className='text-blue-500 mb-3'>Product</h1>
                    <p>Nike</p>
                    <p>Asices</p>
                    <p>New Balance</p>
                    <p>PUMA</p>
                    <p>Addidas</p>
                    <p></p>
                </div>
                <div>
                    <h1 className='text-blue-500 mb-3'>Resourse</h1>
                    <p>Enquary</p>
                    <p>Adress</p>
                    <p>Map Loction</p>

                </div>
                <div>
                    <h1 className='text-blue-500 mb-3'>Company</h1>
                    <p>About US</p>
                    <p>Sign In</p>
                    <p>Support</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-white pb-5 gap-3  border-b-white/20 border-b-2'>
                <div>
                    <h1>Follow us on</h1>
                </div>
                <div className='flex gap-5 items-center'>
                    <ImFacebook2 />
                    <FaInstagram />
                    <FaXTwitter />
                    <FaYoutube />
                </div>

            </div>
            <div>
                <p className='text-white text-center py-5 text-sm'>© 2025 GoingFast. All rights reserved.</p>
            </div>

        </div >
    )
}
