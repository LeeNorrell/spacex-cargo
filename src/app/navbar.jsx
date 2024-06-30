'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const pathname = usePathname()
    return (
      <nav>
        <ul className="flex gap-x-4 text-2xl">
          <li>
            <Link 
              href="/"
              style={{ color: `${pathname === '/' ? 'red' : 'white'}`}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/cargo"
              style={{ color: `${pathname === '/cargo' ? 'red' : 'white'}`}}
            >
              Cargo
            </Link>
          </li>
        </ul>
      </nav> 
    )
}
export default Navbar;