import { Link } from "react-router-dom"

export default function Footer() {
  return (

    <footer className="w-full px-8 py-10 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:py-16 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">SaveCards™</a>. All Rights Reserved.
      </span>
      <div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        correo@gmail.com (512) 512-5445
      </div>
    </footer>
  )
}
