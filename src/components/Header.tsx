
import Link from "next/link"
import ThemeSwitch from "./comps/ThemeSwitch"

export default function Header() {
  return (
    <header className="z-30   flex items-center justify-between w-full gap-5 px-9 py-9 fixed bg-white dark:bg-black shadow">
      <Link href="#" className="flex items-center" prefetch={false}>
  
        <span className="text-lg font-bold">Node Bridge</span>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="#" className="text-gray-600 hover:text-gray-800 font-medium" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-800 font-medium" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-800 font-medium" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-800 font-medium" prefetch={false}>
          Contact
        </Link>
      </nav>
      <div className="flex items-center">
      <ThemeSwitch></ThemeSwitch>
      </div>
    </header>
  )
}

function MountainIcon() {
  return (
    <svg
 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon() {
  return (
    <svg
     
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon() {
  return (
    <svg
     
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}