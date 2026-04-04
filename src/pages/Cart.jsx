import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <section className='align-element py-20'>
        <div className='text-center py-20'>
          <h2 className='heading-md text-base-content/40'>Your cart is empty</h2>
          <p className='body-lg mt-4'>Discover our curated furniture collection</p>
          <Link to='/products' className='premium-btn-primary mt-8 px-10 py-3 inline-flex items-center'>
            Shop Now
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className='align-element py-20'>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-10 grid gap-12 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='premium-btn-primary btn-block mt-8'>
              Proceed to Checkout
            </Link>
          ) : (
            <Link to='/login' className='premium-btn-primary btn-block mt-8'>
              Sign In to Checkout
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
