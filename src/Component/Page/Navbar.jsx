import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import logo from "../../assets/logofornav.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  const categories = [
    { name: "All", path: "/all" },
    { name: "Mens Shoes", path: "/mens-shoes" },
    { name: "Women Shoes", path: "/women-shoes" },
    { name: "Kids Shoes", path: "/kids-shoes" },
  ];

  return (
    <div>
      <div className="bg-[#e8ebe2] p-1 warp relative">
        <nav className="flex justify-evenly items-center text-black shadow-md">

          {/* Logo */}
          <div  className="flex justify-between items-center">
           <Link to="/"> <img className="w-30" src={logo} alt="Logo"/></Link>
           
          </div>

          {/* Search */}
          <Searchbar />

          {/* Desktop Menu */}
          <div className="hidden lg:flex relative">
            <ul className="flex gap-5 text-xl items-center">
              <Link to="/">Home</Link>

              {/* Desktop Categories */}
              <p
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                Categories
              </p>

              <Link>Cart Item</Link>
              <Link to="contact">Contact</Link>
            </ul>

            {/* Desktop Dropdown */}
            {isOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 flex flex-col z-50">
                {categories.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <RxCross2 size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-3 p-4 text-xl text-black">

              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

              {/* Mobile Categories */}
              <div>
                <p
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => setMobileCatOpen(!mobileCatOpen)}
                >
                  Categories
                  <span>{mobileCatOpen ? "▲" : "▼"}</span>
                </p>

                {/* Mobile Categories Submenu */}
                {mobileCatOpen && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2 text-lg">
                    {categories.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-blue-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                )}
              </div>

              <Link>Cart Item</Link>

              <Link to="contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
