import { useContext } from 'react'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import AuthContext from '@/context/AuthContext'
import { FaUserAlt } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'

const SideNav = ({ isOpen, toggleSidebar, toggleContact }) => {
  const { user } = useContext(AuthContext)

  return (
    <div className={`side__nav ${isOpen ? 'show__sidebar' : ''}`}>
      <FiX className='close__btn' onClick={toggleSidebar} />
      <nav>
        <Link href='/' className='nav__link'>
          <a>Home</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>About</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>Market</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>Course</a>
        </Link>
        <Link href='/default' className='nav__link'>
          <a>Desk</a>
        </Link>
        <Link href='/' className='nav__link'>
          <a onClick={toggleContact}>Contact</a>
        </Link>
        <Link href='/default' className='nav__link cart'>
            <a>
              <MdShoppingCart className='user__icon' />
            </a>
          </Link>
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
    </div>
  )
}

export default SideNav
