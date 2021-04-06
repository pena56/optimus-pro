import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
import { FiMenu } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'

const Nav = ({ toggleSidebar, toggleContact }) => {
  const { user } = useContext(AuthContext)

  return (
    <header>
      <div className='section-center'>
        {/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
        <h4 className='logo'>
          <img src="/logo.jpg" alt="OptimusPro Logo"/>
        </h4>

        <nav>
          <Link href='/' className='nav__link'>
            <a>Home</a>
          </Link>
          <Link href='/about' className='nav__link'>
            <a>About</a>
          </Link>
          <Link href='/default' className='nav__link'>
            <a>Market</a>
          </Link>
          <Link href='/courses' className='nav__link'>
            <a>Courses</a>
          </Link>
          <Link href='/default' className='nav__link'>
            <a>Desk</a>
          </Link>
          <button className='nav__link' >
            <a onClick={toggleContact} >Contact</a>
          </button>
          {/* <Link href='/cart' className='nav__link cart'>
            <a>
              <MdShoppingCart className='user__icon' />
            </a>
          </Link> */}
          {/* <Link href="/default" className="nav__link">
            <a><FaUserAlt className="user__icon" /></a>
          </Link> */}
          {/* <Link href="/login" className="nav__link">
            <a>Login</a>
          </Link> */}
          {user ? (
            <Link href='/default' className='nav__link'>
              <a>
                <FaUserAlt className='user__icon' />
              </a>
            </Link>
          ) : (
            <Link href='https://surveyheart.com/form/6064dddc1c0c1a340be327f1' className='nav__link'>
              <a className='action__btn'>Sign up free</a>
            </Link>
          )}
        </nav>
        <FiMenu className='menu' onClick={toggleSidebar} />
      </div>
    </header>
  )
}

export default Nav
