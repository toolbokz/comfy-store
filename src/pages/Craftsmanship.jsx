import { Link } from 'react-router-dom';
import { FALLBACK_IMAGES } from '../utils/imageService';

const Craftsmanship = () => {
    return (
        <section>
            {/* Hero banner */}
            <div className='relative h-[40vh] sm:h-[50vh] overflow-hidden'>
                <img
                    src={FALLBACK_IMAGES.craftsmanship}
                    alt='Furniture craftsmanship'
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                    <div className='text-center'>
                        <p className='label-text-premium text-white/60 mb-4'>
                            The Art of Making
                        </p>
                        <h1 className='text-white heading-xl'>Craftsmanship</h1>
                    </div>
                </div>
            </div>

            <div className='align-element py-20'>
                {/* Intro */}
                <div className='max-w-3xl mx-auto text-center mb-20'>
                    <h2 className='heading-lg'>
                        Made by hand,{' '}
                        <em className='italic'>built to last</em>
                    </h2>
                    <p className='body-lg mt-6'>
                        In an age of mass production, we choose a different path. Every
                        piece in our collection reflects the skill of experienced
                        artisans, the quality of premium materials, and the patience
                        required to do things properly.
                    </p>
                </div>

                {/* Process Grid */}
                <div className='grid md:grid-cols-2 gap-px bg-base-300/50 mb-20'>
                    {[
                        {
                            step: '01',
                            title: 'Design',
                            description:
                                'Each piece begins as a sketch — informed by function, proportion, and material behavior. Our designers balance modern aesthetic with timeless form, creating furniture that feels right in any era.',
                        },
                        {
                            step: '02',
                            title: 'Material Selection',
                            description:
                                'We source kiln-dried hardwoods, full-grain leathers, and high-resilience foams. Every material is tested for durability, comfort, and aging character. We choose materials that get better with time.',
                        },
                        {
                            step: '03',
                            title: 'Construction',
                            description:
                                'Joinery is where quality becomes visible. Our makers use traditional mortise-and-tenon, dovetail, and dowel joints reinforced with modern adhesives. No staples, no shortcuts. Frames are stress-tested before upholstery.',
                        },
                        {
                            step: '04',
                            title: 'Finishing',
                            description:
                                'Surfaces are hand-sanded through multiple grits. Wood finishes are applied in thin coats and hand-rubbed. Upholstery seams are straight, welting is precise, and every cushion is inspected for density and comfort.',
                        },
                    ].map((item) => (
                        <div key={item.step} className='bg-base-100 p-10 sm:p-12'>
                            <span className='font-serif text-4xl text-base-content/10'>
                                {item.step}
                            </span>
                            <h3 className='font-serif text-xl font-medium mt-4 mb-4'>
                                {item.title}
                            </h3>
                            <p className='body-sm leading-relaxed'>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Detail Section */}
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20'>
                    <div>
                        <p className='label-text-premium mb-4'>Our Makers</p>
                        <h2 className='heading-md'>
                            Generations of expertise
                        </h2>
                        <p className='body-lg mt-6'>
                            We work with family-owned workshops and small-batch
                            manufacturers across Europe and North America. Many of our
                            partners have been building furniture for three or more
                            generations, passing down techniques that machines cannot
                            replicate.
                        </p>
                        <p className='body-lg mt-4'>
                            These relationships are not transactional — they are
                            partnerships. We invest in our makers, support fair wages,
                            and commit to long-term collaboration over chasing the
                            lowest cost.
                        </p>
                        <Link
                            to='/about'
                            className='inline-block mt-8 font-sans text-sm font-medium uppercase tracking-widest border-b-2 border-base-content pb-1 hover:border-secondary transition-colors'
                        >
                            About Comfy
                        </Link>
                    </div>
                    <div className='aspect-[4/3] overflow-hidden'>
                        <img
                            src={FALLBACK_IMAGES.craftsmanshipDetail}
                            alt='Artisan at work'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

                {/* Quality Promise */}
                <div className='bg-base-200/50 border border-base-300/50 p-10 sm:p-16 mb-20'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <p className='label-text-premium mb-4'>Quality Promise</p>
                        <h2 className='heading-md mb-10'>
                            What sets Comfy apart
                        </h2>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
                            {[
                                {
                                    title: 'Solid Hardwood',
                                    desc: 'Kiln-dried oak, walnut, and ash — never particleboard or MDF in structural components.',
                                },
                                {
                                    title: 'Traditional Joinery',
                                    desc: 'Mortise-and-tenon construction on every frame for strength that lasts decades.',
                                },
                                {
                                    title: 'Hand Finishing',
                                    desc: 'Each surface is hand-sanded and finished with low-VOC, water-based stains.',
                                },
                                {
                                    title: '25-Year Guarantee',
                                    desc: 'We stand behind our craftsmanship with a comprehensive structural warranty.',
                                },
                            ].map((item) => (
                                <div key={item.title}>
                                    <h4 className='font-serif text-lg font-medium mb-2'>
                                        {item.title}
                                    </h4>
                                    <p className='body-sm'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className='text-center'>
                    <h3 className='heading-sm'>Experience the difference</h3>
                    <p className='body-lg mt-4 max-w-lg mx-auto'>
                        Furniture built by skilled hands, with materials chosen to age
                        beautifully.
                    </p>
                    <Link
                        to='/products'
                        className='premium-btn-primary mt-8 px-10 py-3 inline-flex items-center'
                    >
                        Shop the Collection
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Craftsmanship;
