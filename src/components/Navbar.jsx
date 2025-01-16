import React, { useEffect, useState } from 'react';
import {
  FaUser,
  FaInfoCircle,
  FaShoppingCart,
  FaSearch,
  FaSignInAlt,
  FaBars,
  FaRegHeart,
  FaPhoneAlt,
  FaBlog,
  FaBoxOpen,
  FaHome,
  FaTimes
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
const nav=[
  { label: 'Yoga', options: ['Mats', 'Blocks', 'Clothing'] },
  { label: 'Fitness', options: ['Equipment', 'Weights', 'Accessories'] },
  { label: 'Travelling', options: ['Bags', 'Shoes', 'Gear'] },
  { label: 'Quick Links', options: ['Sale', 'New_Arrivals', 'Top_Picks'] }
]

const Navbar = () => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Fetch cartCount from localStorage when the component mounts
    const storedCartCount = localStorage.getItem('cartCount');
    setCartCount(storedCartCount ? parseInt(storedCartCount, 10) : 0);
  }, []);

  const savedWishlistCount = localStorage.getItem('wishlistCount');
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('auth');

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 
  return (
    <header className="bg-black text-white font-sans">
      {/* Top Section */}
      <div className="container mx-auto py-2 flex items-center justify-between">
        <div className="space-x-2 flex items-center px-1">
          <button
            className="md:hidden bg-gray-400 lg:text-base text-[12px] py-1 px-2 rounded-md"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center ml-2 mr-auto">
          <div className="font-bold text-xl lg:text-3xl">BarbellBase</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-sm lg:text-lg lg:px-16">
          {[
            { path: '/', label: 'Home' },
            { path: '/About', label: 'About Us' },
            { path: '/products', label: 'Shop' },
            { path: '/contact', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-gray-400 transition-colors duration-300 ${isActive(path) ? 'text-gray-400 font-bold underline' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="px-2 lg:pr-10 hidden sm:flex">
          <input
            type="text"
            placeholder="Search.....          🔍"
            className="max-w-[160px] px-4 py-2 rounded-lg bg-gray-800 text-gray-300 placeholder-white outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 pr-6 lg:pr-10 text-lg">
          <FaSearch className="flex sm:hidden" />
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="relative group flex items-center sm:w-14 w-10 sm:h-7 h-5 bg-gray-400 rounded-md hover:bg-sunset-orange transition-all ml-auto text-[10px] sm:text-lg"
            >
              <FaSignInAlt className="transition-opacity duration-200 opacity-100 group-hover:opacity-0 text-sm mx-auto " />
              <span className="absolute font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-1">Login</span>
            </Link>
          ) : (
            <>
              <Link to="/profile">
                <FaUser className="hover:text-red-500 cursor-pointer" />
              </Link>
              <Link to="/Wishlist" className="relative  ">
                <FaRegHeart className="hover:text-red-500 cursor-pointer" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{savedWishlistCount}</span>
              </Link>
            </>
          )}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="hover:text-red-500 cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
          </Link>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
  <div className="fixed inset-0 bg-white bg-opacity-50 z-40">
    <div className="bg-black text-white w-5/6 md:w-1/3 fixed top-0 left-0 h-full shadow-lg rounded-r-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
        <span className="font-semibold uppercase">Menu</span>
        <button
          className="text-xl"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          <FaTimes />
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-4 bg-gray-900 m-6 mt-10 rounded-xl p-2">
        {[
          { path: '/', label: 'Home', icon: FaHome },
          { path: '/products', label: 'Shop', icon: FaBoxOpen },
          { path: '/contact', label: 'Contact', icon: FaPhoneAlt },
          { path: '/About', label: 'About Us', icon: FaInfoCircle }
        ].map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex justify-between items-center px-4 py-2   rounded-xl border-2 bg-gray-800 border-gray-600 ${
              isActive(path)
                ? 'bg-gray-400'
                : 'hover:bg-gray-400 text-white'
            }`}
            onClick={toggleSidebar}
          >
            <span className="text-base font-semibold flex gap-2">
              <Icon size={24} />
              {label}
            </span>
            <span className="text-lg">{'>'}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}

      </div>

      {/* Bottom Section - Links */}
      <nav className="bg-gray-900 text-white text-[14px] sm:text-lg flex justify-center">
  <div className="px-4 py-2 flex items-center space-x-3 sm:space-x-20">
    {nav.map(({ label, options }) => (
      <div className="relative group" key={label}>
        {/* Field Name with Arrow */}
        <button className="flex items-center space-x-1 hover:text-gray-400 transition-colors duration-300">
          <span>{label}</span>
          <span className="text-sm">&#709;</span>
        </button>

        {/* Tooltip Dropdown */}
        <div className="absolute left-0 hidden group-hover:block bg-gray-800 text-white rounded shadow-lg group z-10">
          <ul>
            {options.map((option) => (
              <li key={option}>
                <Link to="/products" className="block px-4 py-2 hover:bg-gray-700">
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</nav>


    </header>
  );
};

export default Navbar;
