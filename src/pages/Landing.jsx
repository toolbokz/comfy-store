import { Hero, FeaturedProducts } from '../components';
import { customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCategoryImages, FALLBACK_IMAGES } from '../utils/imageService';

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const categories = [
  { name: 'Living Room', slug: 'sofas' },
  { name: 'Dining', slug: 'dining' },
  { name: 'Bedroom', slug: 'bedroom' },
  { name: 'Accents', slug: 'decor' },
];

const CategorySection = () => {
  const { data: images } = useQuery({
    queryKey: ['categoryImages'],
    queryFn: fetchCategoryImages,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <section className='section-padding'>
      <div className='text-center mb-12'>
        <p className='label-text-premium mb-3'>Browse</p>
        <h2 className='heading-lg'>Shop by Room</h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4'>
        {categories.map((cat, i) => (
          <Link
            key={cat.slug}
            to='/products'
            className='group relative overflow-hidden aspect-[3/4]'
          >
            <img
              src={
                images?.[i]?.src ||
                FALLBACK_IMAGES.categories[cat.slug] ||
                FALLBACK_IMAGES.categories.sofas
              }
              alt={cat.name}
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6'>
              <h3 className='text-white font-serif text-lg sm:text-xl font-medium'>
                {cat.name}
              </h3>
              <p className='text-white/60 text-xs sm:text-sm mt-1 font-sans tracking-wide'>
                Explore &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const BrandStory = () => {
  return (
    <section className='section-padding bg-base-200/50'>
      <div className='align-element'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          <div>
            <p className='label-text-premium mb-4'>Our Philosophy</p>
            <h2 className='heading-lg'>
              Designed with intention,{' '}
              <em className='italic'>crafted with care</em>
            </h2>
            <p className='body-lg mt-6'>
              Every piece in our collection is selected for its quality of
              construction, timeless design, and ability to transform a space.
              We believe furniture should be an investment in how you live.
            </p>
            <p className='body-lg mt-4'>
              From sustainably sourced materials to expert craftsmanship, we
              partner with makers who share our commitment to excellence.
            </p>
            <Link
              to='/about'
              className='inline-block mt-8 font-sans text-sm font-medium uppercase tracking-widest border-b-2 border-base-content pb-1 hover:border-secondary transition-colors'
            >
              Learn More
            </Link>
          </div>
          <div className='aspect-[4/5] overflow-hidden'>
            <img
              src={FALLBACK_IMAGES.brand}
              alt='Furniture craftsmanship'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <>
      <section className='align-element pt-12 sm:pt-16 lg:pt-20'>
        <Hero />
      </section>
      <section className='align-element'>
        <CategorySection />
      </section>
      <section className='align-element'>
        <FeaturedProducts />
      </section>
      <BrandStory />
    </>
  );
};
export default Landing;
