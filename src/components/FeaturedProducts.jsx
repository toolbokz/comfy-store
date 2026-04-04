import ProductsGrid from './ProductsGrid';

const FeaturedProducts = () => {
  return (
    <section className='section-padding'>
      <div className='text-center mb-12'>
        <p className='label-text-premium mb-3'>Curated for you</p>
        <h2 className='heading-lg'>Featured Collection</h2>
      </div>
      <ProductsGrid />
    </section>
  );
};
export default FeaturedProducts;
