import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-lg btn btn-sm btn-circle ${pattern === layout
        ? 'btn-primary'
        : 'btn-ghost text-base-content/40'
      }`;
  };

  return (
    <>
      <div className='flex justify-between items-center mt-8 border-b border-base-300/50 pb-5'>
        <p className='body-sm'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </p>
        <div className='flex gap-x-2'>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className='heading-sm mt-16 text-center text-base-content/50'>
            No products matched your search
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
