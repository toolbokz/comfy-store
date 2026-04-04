import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { toast } from 'react-toastify';
import { redirect, Link } from 'react-router-dom';

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return (
      <section className='align-element py-20'>
        <div className='text-center py-20'>
          <h2 className='heading-md text-base-content/40'>Your cart is empty</h2>
          <p className='body-lg mt-4'>Add some items before checking out</p>
          <Link to='/products' className='premium-btn-primary mt-8 px-10 py-3 inline-flex items-center'>
            Browse Products
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className='align-element py-20'>
      <SectionTitle text='Checkout' />
      <div className='mt-10 grid gap-12 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </section>
  );
};
export default Checkout;
