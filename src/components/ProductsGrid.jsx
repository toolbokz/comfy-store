import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className='pt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='group premium-card'
          >
            <figure className='overflow-hidden aspect-[4/3]'>
              <img
                src={image}
                alt={title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </figure>
            <div className='p-6'>
              <h3 className='font-serif text-lg capitalize tracking-wide'>
                {title}
              </h3>
              <p className='font-sans text-secondary mt-2 text-sm font-medium'>
                {dollarsAmount}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
