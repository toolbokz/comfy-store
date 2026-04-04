import { useLoaderData, Link } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
    async ({ params }) => {
      const response = await queryClient.ensureQueryData(
        singleProductQuery(params.id)
      );

      return { product: response.data.data };
    };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className='align-element py-12 sm:py-20'>
      {/* Breadcrumbs */}
      <nav className='mb-10'>
        <ol className='flex items-center gap-2 font-sans text-sm'>
          <li>
            <Link
              to='/'
              className='text-base-content/40 hover:text-base-content transition-colors'
            >
              Home
            </Link>
          </li>
          <li className='text-base-content/30'>/</li>
          <li>
            <Link
              to='/products'
              className='text-base-content/40 hover:text-base-content transition-colors'
            >
              Products
            </Link>
          </li>
          <li className='text-base-content/30'>/</li>
          <li className='text-base-content capitalize'>{title}</li>
        </ol>
      </nav>

      {/* Product Layout */}
      <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'>
        {/* Image */}
        <div className='aspect-square overflow-hidden bg-base-200'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Details */}
        <div className='flex flex-col justify-center'>
          <p className='label-text-premium mb-3'>{company}</p>
          <h1 className='heading-lg capitalize'>{title}</h1>
          <p className='font-serif text-2xl text-secondary mt-4'>
            {dollarsAmount}
          </p>
          <p className='body-lg mt-8'>{description}</p>

          {/* Colors */}
          <div className='mt-8'>
            <h4 className='label-text-premium mb-3'>Color</h4>
            <div className='flex gap-3'>
              {colors.map((color) => (
                <button
                  key={color}
                  type='button'
                  className={`w-8 h-8 rounded-full border-2 transition-all ${color === productColor
                      ? 'border-base-content scale-110'
                      : 'border-transparent hover:border-base-300'
                    }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className='mt-8'>
            <label htmlFor='amount' className='label-text-premium mb-3 block'>
              Quantity
            </label>
            <select
              className='premium-select select-md w-full max-w-[120px]'
              id='amount'
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>

          {/* Add to Cart */}
          <div className='mt-10'>
            <button
              className='premium-btn-primary w-full sm:w-auto px-12 py-3'
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Trust badges */}
          <div className='mt-10 pt-8 border-t border-base-300/50 grid grid-cols-2 gap-4'>
            <div>
              <p className='font-sans text-xs font-semibold uppercase tracking-wider'>
                Free Shipping
              </p>
              <p className='text-xs text-base-content/50 mt-1'>
                On orders over $150
              </p>
            </div>
            <div>
              <p className='font-sans text-xs font-semibold uppercase tracking-wider'>
                Easy Returns
              </p>
              <p className='text-xs text-base-content/50 mt-1'>
                30-day return policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
