import Link from 'next/link'
import { FiMenu } from "react-icons/fi";

const Nav = ({toggleSidebar}) => {
  return (
    <header>
      <div className="section-center">
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        <nav>
          <Link href="/" className="nav__link">
            <a>Home</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>About</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Course</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Market</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Blog</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Contact</a>
          </Link>
          <Link href="/login" className="nav__link">
            <a className="btn">Login</a>
          </Link>
        </nav>
        <FiMenu className="menu" onClick={toggleSidebar} />
      </div>
    </header>
  )
}

export default Nav
