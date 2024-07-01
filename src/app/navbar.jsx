'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const pathname = usePathname();

    const setLinkColor = (linkPath) => pathname === linkPath 
      ? 'text-red-600'
      : 'text-white';
    ;

    return (
      <nav>
        <ul className="flex gap-x-4 text-2xl">
          <li>
            <Link 
              href="/"
              className={setLinkColor('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/cargo"
              className={setLinkColor('/cargo')}
            >
              Cargo
            </Link>
          </li>
        </ul>
      </nav> 
    )
}
export default Navbar;