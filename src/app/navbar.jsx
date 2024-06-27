import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/cargo' ? 'active' : ''}`}
            href="/cargo"
          >
            Cargo
          </Link>
        </li>
      </ul>
    </nav> 
    )
}
export default Navbar;