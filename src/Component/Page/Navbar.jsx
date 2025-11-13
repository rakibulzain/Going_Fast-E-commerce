import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import Contact from "./Contact";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className='bg-[#e8ebe2] p-1 warp'>

        <nav className="flex justify-evenly items-center text-black shadow-md">
          <div className="flex justify-between items-center ">
            <img className='w-30' src="src/assets/logofornav.png" alt="" />
          </div>

          <div className='px-5 py-2 flex justify-end items-center border border-black/30 rounded-lg'>
            <div className="flex justify-center items-center overflow-hidden gap-2">           
              <input type="text" placeholder='Search Products' className='outline-none bg-white/50 px-2 rounded-md ' />
              <span className="text-white bg-blue-600 px-5 p-1 rounded-lg" ><IoIosSearch /></span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex'>
            <ul className='flex gap-5 text-xl'>
              <Link to='/'>Home</Link>
              <Link to="categories">Categories</Link>
              <Link>Cart Item</Link>
              <Link to="contact">Contact</Link>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <RxCross2 size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </nav>

        {/* ✅ Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className='flex flex-col gap-4 p-4 text-xl text-black'>
              <li>Home</li>
              <li>Categories</li>
              <li>Cart Item</li>
              <li>Contact</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}
