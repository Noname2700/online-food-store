import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { HeaderProps } from "../../types/Header";
import { UserContext } from "@/src/lib/context/UserContext";
import { useContext } from "react";

function Header(headerProps: HeaderProps) {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  if (!user) return null;

  return (
    <header className="bg-gray-800 text-white p-4">
      <h1>{headerProps.title}</h1>
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">
          <img src="/path/to/logo.png" alt="Divinita Dominican Food Logo" />
        </div>
        <ul className="flex space-x-4">
          {headerProps.links?.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {user ? (
        <>
          <button onClick={headerProps.onSignUpClick}>
            <span>{user.name}</span>
            <span>Log Out</span>
          </button>
        </>
      ) : (
        <>
          <button onClick={headerProps.onSignUpClick}>Sign In</button>
        </>
      )}

      <button onClick={headerProps.onSearchClick}>
        Search
        {<FaSearch size={20} />}
      </button>
    </header>
  );
}
export default Header;
