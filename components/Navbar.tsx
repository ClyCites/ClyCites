// import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// NAVIGATION
export const NAV_LINKS = [
  {
    href: '/',
    key: 'home',
    label: 'Home'
  },
  {
    href: '/',
    key: 'products',
    label: 'Products',
    dropdown: [
      { href: '/', label: 'Product 1' },
      { href: '/', label: 'Product 2' },
      { href: '/', label: 'Product 3' },
      { href: '/', label: 'Product 4' },
      { href: '/', label: 'Product 5' },
      { href: '/', label: 'Product 6' }
    ]
  },
  {
    href: '/',
    key: 'solutions',
    label: 'Solutions',
    dropdown: [
      { href: '/', label: 'Solution 1' },
      { href: '/', label: 'Solution 2' },
      { href: '/', label: 'Solution 3' },
      { href: '/', label: 'Solution 4' },
      { href: '/', label: 'Solution 5' },
      { href: '/', label: 'Solution 6' }
    ]
  },
  {
    href: '/',
    key: 'how_clycites_work',
    label: 'How ClyCites Work?'
  },
  {
    href: '/',
    key: 'contact_us',
    label: 'About',
    dropdown: [
      { href: '/', label: 'About Us' },
      { href: '/', label: 'Contact Us' },
      { href: '/', label: 'FAQs' },
      { href: '/', label: 'Terms of Service' },
      { href: '/', label: 'Privacy Policy' },
      { href: '/', label: 'Site Map' }
    ]
  }
];

const Navbar = () => {
  return (
    
    <nav className="flexBetween max-container padding-container fixed top-8 left-0 w-full z-20 py-1` bg-white border-b-2 border-white shadow-lg">
      <Link href="/">
        <Image src="/images/logo.jpeg" alt="logo" width={80} height={29} className="rounded-full"/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="relative">
            <Link
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
              {link.dropdown && (
                <svg
                  xmlns="(link unavailable)"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link>
            {link.dropdown && (
              <ul
                className="absolute top-full left-0 bg-white text-gray-800 p-4 w-64 shadow-lg opacity-0 transition-opacity group-hover:opacity-100"
              >
                <div className="grid grid-cols-2 gap-4">
                  {link.dropdown.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.label}
                      href={dropdownLink.href}
                      className="text-gray-50 hover:text-black transition-all"
                    >
                      {dropdownLink.label}
                    </Link>
                  ))}
                </div>
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
