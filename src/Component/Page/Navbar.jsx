import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom"; // 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const categories = ["All", "Mens Shoes", "Women Shoes", "Kids Shoes"];
  const categories = [
    {
      name: "All",
      path: "/all"
    },
    {
      name: "Mens Shoes",
      path: "/mens-shoes"
    },
    {
      name: "Women Shoes",
      path: "/women-shoes"
    },
 
    {
      name: "Kids Shoes",
      path: "/kids-shoes"
    }
  ];

  return (
    <div>
      <div className="bg-[#e8ebe2] p-1 warp relative">
        <nav className="flex justify-evenly items-center text-black shadow-md">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <img className="w-30" src="src/assets/logofornav.png" alt="Logo" />
          </div>

          {/*Search Box */}
          <div className="px-2 py-2 flex justify-end items-center border border-black/30 rounded-lg">
            <div className="flex justify-center items-center overflow-hidden gap-2">
              <input
                type="text"
                placeholder="Search Products"
                className="outline-none bg-white/50 px-2 rounded-md"
              />
              <span className="text-white bg-blue-600 px-5 p-1 rounded-lg">
                <IoIosSearch />
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex relative">
            <ul className="flex gap-5 text-xl items-center">
              <Link to="/">Home</Link>

              {/* Drawer Toggle */}
              <Link
                onClick={() => setIsOpen(!isOpen)}>Categories</Link>

              <Link>Cart Item</Link>
              <Link to="contact">Contact</Link>
            </ul>

            {/* Drawer */}
            {isOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 flex flex-col z-50">
                {categories.map((item, index) => (
                  <Link to={item.path}
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <RxCross2 size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-4 p-4 text-xl text-black">
              <Link to="/">Home</Link>
              <li>Categories</li>
              <li>Cart Item</li>
              <Link to="contact">Contact</Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
