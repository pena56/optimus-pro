import Link from 'next/link'
import { FiX } from 'react-icons/fi'

const SideNav = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`side__nav ${isOpen ? "show__sidebar" : ""}`}>
    <FiX className="close__btn" onClick={toggleSidebar} />
      <nav>
        <Link href='/' className='nav__link'>
          <a>Home</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>About</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>Course</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>Market</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>Blog</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>Contact</a>
        </Link>
        <Link href='/login' className='nav__link'>
          <a className='btn'>Login</a>
        </Link>
      </nav>
    </div>
  )
}

export default SideNav
