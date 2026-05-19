import Link from "next/link";
//import { FaSearch } from "react-icons/fa";
import { HeaderProps } from "../../types/header";

function Header(headerProps: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">
          <h1>{headerProps.title}</h1>
          <img src="/path/to/logo.png" alt="Divinita Dominican Food Logo" />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button onClick={headerProps.onSearchClick}>Search
        {/* <FaSearch size={20} /> */}
      </button>
    </header>
  );
}
export default Header;
