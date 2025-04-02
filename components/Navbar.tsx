import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav 
      className="flex items-center justify-between max-container padding-container relative z-30 py-4 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-10"
      style={{ backgroundImage: "url('/Homepic.jpg')" }}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden lg:flex gap-10">
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="relative regular-18 text-gray-1000 flex items-center cursor-pointer pb-1.5 transition-all hover:text-green-500 hover:font-bold 
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Buttons Positioned to the Right */}
      <div className="hidden lg:flex items-center space-x-3">
        <button className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Login
          </span>
        </button>

        <button className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-green-800 group-hover:from-blue-400 group-hover:to-green-400 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Sign Up
          </span>
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar
