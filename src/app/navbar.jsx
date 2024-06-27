'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const pathname = usePathname()
    return (
      <nav >
        <ul>
          <li>
            <Link 
              href="/"
              style={{ color: `${pathname === '/' ? 'red' : 'black'}`}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/cargo"
              style={{ color: `${pathname === '/cargo' ? 'red' : 'black'}`}}
            >
              Cargo
            </Link>
          </li>
        </ul>
      </nav> 
    )
}
export default Navbar;