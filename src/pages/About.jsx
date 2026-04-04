import { FALLBACK_IMAGES } from '../utils/imageService';

const About = () => {
  return (
    <section>
      {/* Hero banner */}
      <div className='relative h-[40vh] sm:h-[50vh] overflow-hidden'>
        <img
          src={FALLBACK_IMAGES.about}
          alt='About Comfy'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <h1 className='text-white heading-xl'>Our Story</h1>
        </div>
      </div>

      {/* Content */}
      <div className='align-element py-20'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-16'>
            <p className='label-text-premium mb-4'>Since 2020</p>
            <h2 className='heading-lg'>
              Furniture that tells{' '}
              <em className='italic'>your story</em>
            </h2>
          </div>

          <div className='space-y-6 body-lg'>
            <p>
              At Comfy, we believe that great furniture is more than functional &mdash;
              it&apos;s personal. Every piece in our collection is chosen for its
              exceptional craftsmanship, timeless design, and ability to transform
              a living space into a home.
            </p>
            <p>
              We work with artisans and manufacturers who share our commitment to
              quality materials, sustainable practices, and meticulous attention
              to detail. From hand-finished hardwoods to premium upholstery fabrics,
              every element is considered.
            </p>
            <p>
              Our mission is simple: to make premium furniture accessible, to
              curate collections that inspire, and to help you create spaces
              you love coming home to.
            </p>
          </div>

          {/* Values */}
          <div className='grid sm:grid-cols-3 gap-8 mt-20'>
            {[
              {
                title: 'Quality First',
                desc: 'Every piece is vetted for construction quality, material integrity, and lasting durability.',
              },
              {
                title: 'Timeless Design',
                desc: "We favor designs that transcend trends \u2014 pieces you'll love for years, not months.",
              },
              {
                title: 'Sustainable Practice',
                desc: "Responsible sourcing and packaging, because beautiful furniture shouldn't cost the earth.",
              },
            ].map((value) => (
              <div key={value.title} className='text-center'>
                <h3 className='font-serif text-lg font-medium mb-3'>
                  {value.title}
                </h3>
                <p className='body-sm'>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
