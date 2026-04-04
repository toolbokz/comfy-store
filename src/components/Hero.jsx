import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchHeroImages } from '../utils/imageService';

const Hero = () => {
  const { data: heroImages } = useQuery({
    queryKey: ['heroImages'],
    queryFn: fetchHeroImages,
    staleTime: 1000 * 60 * 30,
  });

  const mainImage = heroImages?.[0]?.src || '';

  return (
    <div className='relative'>
      {/* Main Hero */}
      <div className='grid lg:grid-cols-2 gap-0 min-h-[60vh] lg:min-h-[75vh]'>
        {/* Text Content */}
        <div className='flex flex-col justify-center py-12 lg:py-0 lg:pr-16 order-2 lg:order-1'>
          <p className='label-text-premium mb-6'>Curated Living</p>
          <h1 className='heading-xl' style={{ textWrap: 'balance' }}>
            Furniture designed for{' '}
            <em className='italic'>modern living</em>
          </h1>
          <p className='body-lg mt-6 max-w-lg'>
            Thoughtfully crafted pieces that bring warmth, elegance, and
            character to every room. Made to last, designed to inspire.
          </p>
          <div className='flex flex-wrap gap-4 mt-10'>
            <Link to='/products' className='premium-btn-primary px-10 py-3.5'>
              Shop Collection
            </Link>
            <Link to='/about' className='premium-btn-outline px-10 py-3.5'>
              Our Story
            </Link>
          </div>
        </div>
        {/* Hero Image */}
        <div className='relative overflow-hidden order-1 lg:order-2 h-[50vh] lg:h-auto'>
          {mainImage ? (
            <img
              src={mainImage}
              alt='Premium furniture collection'
              className='w-full h-full object-cover'
            />
          ) : (
            <div className='w-full h-full bg-base-200 animate-pulse' />
          )}
        </div>
      </div>
      {/* Value Props */}
      <div className='grid sm:grid-cols-3 gap-px mt-8 bg-base-300/50'>
        {[
          { title: 'Free Shipping', desc: 'On orders over $150' },
          { title: 'Crafted Quality', desc: 'Built to last generations' },
          { title: 'Easy Returns', desc: '30-day return policy' },
        ].map((item) => (
          <div key={item.title} className='bg-base-100 p-8 text-center'>
            <h3 className='font-sans text-sm font-semibold uppercase tracking-widest'>
              {item.title}
            </h3>
            <p className='body-sm mt-1'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hero;
