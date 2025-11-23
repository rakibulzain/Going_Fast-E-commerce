import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logofornav.png";


export default function Footer() {
    return (
    <div className="bg-black/50 mt-10">

  {/* Main Footer Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white p-10">

    {/* Company Info */}
    <div>
      <img className="w-24 mb-4" src={logo} alt="logo" />
      <p>Post office Road, Gulshan-1, Dhaka 1200</p>
      <p className="mb-4">Bangladesh</p>
      <p>Call: +8801869368630</p>
      <p>Email: goingfast@gmail.com</p>
    </div>

    {/* Product */}
    <div>
      <h1 className="text-blue-400 font-semibold mb-3">Product</h1>
      <ul className="space-y-1">
        <li><a href="https://www.bing.com/ck/a?!&&p=bdc9a968529d0305738da0bbf40354f55070d7e39567b9f6e166c86f7820e51eJmltdHM9MTc2Mzg1NjAwMA&ptn=3&ver=2&hsh=4&fclid=211b4538-fbbe-6e38-1bfd-5315fa0c6f17&psq=nikes+&u=a1aHR0cHM6Ly93d3cubmlrZS5jb20vP21zb2NraWQ9MjExYjQ1MzhmYmJlNmUzODFiZmQ1MzE1ZmEwYzZmMTc">Nike</a></li>
        <li> <a href="https://www.bing.com/ck/a?!&&p=23da3bfb1fb9f2f83d12de41ccbf5dc6499dc6ec48cbac88aba64c833a2b1578JmltdHM9MTc2Mzg1NjAwMA&ptn=3&ver=2&hsh=4&fclid=211b4538-fbbe-6e38-1bfd-5315fa0c6f17&psq=Asics&u=a1aHR0cHM6Ly93d3cuYXNpY3MuY29tL3VzL2VuLXVzLz9tc29ja2lkPTIxMWI0NTM4ZmJiZTZlMzgxYmZkNTMxNWZhMGM2ZjE3">Asics</a></li>
        <li><a href="https://www.bing.com/ck/a?!&&p=00220bc5eb9974dd4c22f646826799a34faebb784436baf5e689a7266bbfe852JmltdHM9MTc2Mzg1NjAwMA&ptn=3&ver=2&hsh=4&fclid=211b4538-fbbe-6e38-1bfd-5315fa0c6f17&psq=new+balance&u=a1aHR0cHM6Ly93d3cubmV3YmFsYW5jZS5jb20v">New Balance</a></li>
        <li><a href="https://www.bing.com/ck/a?!&&p=00b0d372921142f69bd80905adbacbf368bf56cc945fb45c4448a34b4e01ad74JmltdHM9MTc2Mzg1NjAwMA&ptn=3&ver=2&hsh=4&fclid=211b4538-fbbe-6e38-1bfd-5315fa0c6f17&psq=puma&u=a1aHR0cHM6Ly91cy5wdW1hLmNvbS91cy9lbj9tc29ja2lkPTIxMWI0NTM4ZmJiZTZlMzgxYmZkNTMxNWZhMGM2ZjE3">PUMA</a></li>
        <li><a href="https://www.bing.com/ck/a?!&&p=8f5a60b5f8b4005f2c3f2e2c37c753c31e587a6bdd7758f2fe93de143fd5044aJmltdHM9MTc2Mzg1NjAwMA&ptn=3&ver=2&hsh=4&fclid=211b4538-fbbe-6e38-1bfd-5315fa0c6f17&psq=adidas&u=a1aHR0cHM6Ly93d3cuYWRpZGFzLmNvbS91cz9tc29ja2lkPTIxMWI0NTM4ZmJiZTZlMzgxYmZkNTMxNWZhMGM2ZjE3">Adidas</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h1 className="text-blue-400 font-semibold mb-3">Resources</h1>
      <ul className="space-y-1">
        <li>Enquiry</li>
        <li>Address</li>
        <li>Map Location</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h1 className="text-blue-400 font-semibold mb-3">Company</h1>
      <ul className="space-y-1">
        <li>About Us</li>
        <li>Sign In</li>
        <li>Support</li>
      </ul>
    </div>
  </div>

  {/* Social Icons */}
  <div className="flex flex-col justify-center items-center text-white pb-6 border-b border-white/20 gap-3">
    <h1 className="text-lg">Follow us on</h1>
    <div className="flex gap-6 text-2xl">
      <ImFacebook2 className="hover:text-blue-500 duration-200" />
      <FaInstagram className="hover:text-pink-500 duration-200" />
      <FaXTwitter className="hover:text-gray-300 duration-200" />
      <FaYoutube className="hover:text-red-600 duration-200" />
    </div>
  </div>

  {/* Footer Bottom */}
  <p className="text-white text-center py-5 text-sm">
    © 2025 GoingFast. All rights reserved.
  </p>
</div>

    )
}
