import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <article className='flex flex-col sm:flex-row gap-6 py-8 border-b border-base-300/50 last:border-b-0'>
      <img
        src={image}
        alt={title}
        className='h-28 w-28 object-cover bg-base-200'
      />
      <div className='flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
        <div>
          <h3 className='font-serif text-base capitalize'>{title}</h3>
          <p className='body-sm capitalize mt-1'>{company}</p>
          <div className='flex items-center gap-2 mt-3'>
            <span className='text-xs text-base-content/40 uppercase tracking-wider font-sans'>
              Color:
            </span>
            <span
              className='w-4 h-4 rounded-full border border-base-300'
              style={{ backgroundColor: productColor }}
            />
          </div>
        </div>
        <div className='flex flex-col items-start sm:items-end gap-3'>
          <p className='font-serif text-lg'>{formatPrice(price)}</p>
          <select
            name='amount'
            className='premium-select select-xs w-20'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
          <button
            className='text-xs text-base-content/40 hover:text-error font-sans uppercase tracking-wider transition-colors pb-0.5 border-b border-transparent hover:border-error/30'
            onClick={removeItemFromTheCart}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
