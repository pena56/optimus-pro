import { useContext } from 'react';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';
import { CartContext } from '@/context/cart';
import { FiMenu } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';

const Nav = ({ toggleSidebar, toggleContact }) => {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <header>
      <div className="section-center">
        {/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
        <h4 className="logo">
          {/* <img src="/logo.jpg" alt="OptimusPro Logo"/> */}
          Optimus<span>Pro</span>
        </h4>

        <nav>
          <Link href="/" className="nav__link">
            <a>Home</a>
          </Link>
          <Link href="/about" className="nav__link">
            <a>About</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Market</a>
          </Link>
          <Link href="/courses" className="nav__link">
            <a>Courses</a>
          </Link>
          <Link href="/default" className="nav__link">
            <a>Desk</a>
          </Link>
          <button className="nav__link">
            <a onClick={toggleContact}>Contact</a>
          </button>
          <Link href="/cart" className="nav__link cart">
            <a>
              <MdShoppingCart className="user__icon" />
              {cart?.length}
            </a>
          </Link>
          {/* <Link href="/default" className="nav__link">
            <a><FaUserAlt className="user__icon" /></a>
          </Link> */}
          {/* <Link href="/login" className="nav__link">
            <a>Login</a>
          </Link> */}
          {user ? (
            <Link href="/default" className="nav__link">
              <a>
                <FaUserAlt className="user__icon" />
              </a>
            </Link>
          ) : (
            <Link href="/login" className="nav__link">
              <a className="nav__btn">Login</a>
            </Link>
          )}
        </nav>
        <FiMenu className="menu" onClick={toggleSidebar} />
      </div>
    </header>
  );
};

export default Nav;
