import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className='bg-base-200/50 border border-base-300/50 p-8'>
      <h4 className='font-sans text-xs font-semibold uppercase tracking-widest mb-6'>
        Order Summary
      </h4>
      <div className='space-y-3'>
        <p className='flex justify-between text-sm'>
          <span className='text-base-content/60'>Subtotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
        <p className='flex justify-between text-sm'>
          <span className='text-base-content/60'>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        <p className='flex justify-between text-sm'>
          <span className='text-base-content/60'>Tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
      </div>
      <div className='border-t border-base-300/50 mt-6 pt-6'>
        <p className='flex justify-between'>
          <span className='font-serif text-lg'>Total</span>
          <span className='font-serif text-lg'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
