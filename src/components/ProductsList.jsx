import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className='mt-12 grid gap-y-6'>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='premium-card p-6 flex flex-col sm:flex-row gap-6 group'
          >
            <div className='overflow-hidden w-full sm:w-40 h-40 flex-shrink-0'>
              <img
                src={image}
                alt={title}
                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>
            <div className='flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
              <div>
                <h3 className='font-serif text-lg capitalize'>{title}</h3>
                <p className='body-sm capitalize mt-1'>{company}</p>
              </div>
              <p className='font-serif text-lg text-secondary'>
                {dollarsAmount}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
