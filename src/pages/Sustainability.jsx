import { Link } from 'react-router-dom';
import { FALLBACK_IMAGES } from '../utils/imageService';

const Sustainability = () => {
    return (
        <section>
            {/* Hero banner */}
            <div className='relative h-[40vh] sm:h-[50vh] overflow-hidden'>
                <img
                    src={FALLBACK_IMAGES.sustainability}
                    alt='Sustainable furniture materials'
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                    <div className='text-center'>
                        <p className='label-text-premium text-white/60 mb-4'>
                            Our Commitment
                        </p>
                        <h1 className='text-white heading-xl'>Sustainability</h1>
                    </div>
                </div>
            </div>

            <div className='align-element py-20'>
                {/* Intro */}
                <div className='max-w-3xl mx-auto text-center mb-20'>
                    <h2 className='heading-lg'>
                        Beautiful furniture,{' '}
                        <em className='italic'>lighter footprint</em>
                    </h2>
                    <p className='body-lg mt-6'>
                        We believe that creating beautiful spaces should not come at the
                        cost of the planet. Sustainability is not a marketing line for
                        us — it is woven into every decision we make, from material
                        sourcing to packaging and delivery.
                    </p>
                </div>

                {/* Pillars */}
                <div className='grid md:grid-cols-3 gap-8 mb-20'>
                    {[
                        {
                            title: 'Responsible Sourcing',
                            description:
                                'We partner with suppliers who share our values. Our hardwoods come from FSC-certified forests and managed plantations. We prioritize reclaimed and recycled materials wherever possible, reducing demand on virgin resources.',
                        },
                        {
                            title: 'Reduced Waste',
                            description:
                                'Our production partners use precision cutting technology to minimize material waste. Offcuts are repurposed into smaller items or donated to local workshops. We aim for zero landfill in our supply chain by 2027.',
                        },
                        {
                            title: 'Conscious Packaging',
                            description:
                                'Every order ships in recycled and recyclable packaging. We have eliminated single-use plastics from our fulfillment process and use plant-based protective materials derived from cornstarch and mushroom mycelium.',
                        },
                    ].map((pillar) => (
                        <div
                            key={pillar.title}
                            className='border border-base-300/50 p-8'
                        >
                            <h3 className='font-serif text-xl font-medium mb-4'>
                                {pillar.title}
                            </h3>
                            <p className='body-sm leading-relaxed'>{pillar.description}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Section */}
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20'>
                    <div className='aspect-[4/3] overflow-hidden'>
                        <img
                            src={FALLBACK_IMAGES.sustainabilityDetail}
                            alt='Sustainable material details'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div>
                        <p className='label-text-premium mb-4'>Materials</p>
                        <h2 className='heading-md'>
                            Chosen with care, built to endure
                        </h2>
                        <p className='body-lg mt-6'>
                            Every material in our collection is evaluated for
                            environmental impact, durability, and beauty. We favor natural
                            fibers like linen, wool, and organic cotton for upholstery.
                            Our wood finishes use water-based, low-VOC stains and
                            sealants that are safer for your home and the environment.
                        </p>
                        <p className='body-lg mt-4'>
                            Longevity is the most sustainable choice. By building
                            furniture that lasts decades rather than seasons, we reduce
                            the cycle of consumption and waste that plagues the
                            industry.
                        </p>
                    </div>
                </div>

                {/* Commitments */}
                <div className='bg-base-200/50 border border-base-300/50 p-10 sm:p-16 mb-20'>
                    <div className='max-w-3xl mx-auto'>
                        <p className='label-text-premium mb-4'>Our Goals</p>
                        <h2 className='heading-md mb-10'>
                            Where we are, where we are going
                        </h2>
                        <div className='space-y-8'>
                            {[
                                {
                                    metric: '85%',
                                    label: 'Recycled packaging materials across all shipments',
                                },
                                {
                                    metric: '100%',
                                    label:
                                        'FSC-certified or reclaimed wood in our collections',
                                },
                                {
                                    metric: '60%',
                                    label:
                                        'Carbon footprint reduction target by 2030 vs. 2022 baseline',
                                },
                                {
                                    metric: 'Zero',
                                    label:
                                        'Single-use plastics in our supply chain since 2024',
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className='flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-base-300/30 pb-6'
                                >
                                    <span className='font-serif text-3xl text-secondary flex-shrink-0 sm:w-24'>
                                        {item.metric}
                                    </span>
                                    <p className='body-lg'>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className='text-center'>
                    <h3 className='heading-sm'>Shop with intention</h3>
                    <p className='body-lg mt-4 max-w-lg mx-auto'>
                        Every Comfy purchase supports sustainable forestry, fair labor
                        practices, and a cleaner planet.
                    </p>
                    <Link
                        to='/products'
                        className='premium-btn-primary mt-8 px-10 py-3 inline-flex items-center'
                    >
                        Explore Collection
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Sustainability;
