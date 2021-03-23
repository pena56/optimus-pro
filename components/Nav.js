import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from 'react-icons/md'

const Nav = ({toggleSidebar}) => {
  return (
    <header>
      <div className="section-center">
      {/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
      <h4 className="logo">Optimus<span>Pro</span> </h4>
        <nav>
          <Link href="/" className="nav__link">
            <a>Home</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>About</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Market</a>
          </Link>
          <Link href="/courses" className="nav__link">
            <a>Course</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Desk</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Contact</a>
          </Link>
          {/* <Link href="/default" className="nav__link cart">
            <a><MdShoppingCart className="user__icon" /></a>
          </Link> */}
          <Link href="/default" className="nav__link">
            <a><FaUserAlt className="user__icon" /></a>
          </Link>
          {/* <Link href="/login" className="nav__link">
            <a>Login</a>
          </Link> */}
          <Link href="/signup" className="nav__link">
            <a className="action__btn">Sign up free</a>
          </Link>
        </nav>
        <FiMenu className="menu" onClick={toggleSidebar} />
      </div>
    </header>
  )
}

export default Nav
