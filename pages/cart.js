import { useContext } from 'react';
import Section from '@/components/Section';
import EmptyCart from '@/components/EmptyCart';
import CartItem from '@/components/CartItem';
import { MdShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';
import { CartContext } from '@/context/cart';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { cart, getCartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <Section>
        <div className="cart_section">
          <div className="row">
            <div className="col-md-8 mx-auto">
              {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
            <div className="col-md-4 mx-auto">
              <div className="total_card">
                <h5>Total:</h5>
                <h2 className="total">{getCartTotal()}</h2>
                <h5>
                  <del>$390.99</del>
                </h5>
                <h5>89% off</h5>
                {user ? (
                  <Link href="/checkout">
                    <a className="btn">
                      <MdShoppingCart /> Checkout
                    </a>
                  </Link>
                ) : (
                  <Link href="/login">
                    <a className="btn">Login</a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Cart;
