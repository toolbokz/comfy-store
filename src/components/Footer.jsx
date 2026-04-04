import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-neutral text-neutral-content'>
            <div className='align-element py-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {/* Brand */}
                    <div className='sm:col-span-2 lg:col-span-1'>
                        <Link to='/' className='font-serif text-2xl tracking-wider'>
                            COMFY
                        </Link>
                        <p className='mt-4 text-sm text-neutral-content/60 leading-relaxed max-w-xs'>
                            Premium furniture for modern living. Thoughtfully curated,
                            beautifully crafted.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className='font-sans text-xs font-semibold uppercase tracking-widest mb-6'>
                            Shop
                        </h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    to='/products'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/products?category=Tables'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Dining
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/products?category=Chairs'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Seating
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/products?category=Beds'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Bedroom
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className='font-sans text-xs font-semibold uppercase tracking-widest mb-6'>
                            Company
                        </h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    to='/about'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/sustainability'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/craftsmanship'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Craftsmanship
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/privacy-policy'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/terms-of-service'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className='font-sans text-xs font-semibold uppercase tracking-widest mb-6'>
                            Support
                        </h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    to='/cart'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Shopping Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/orders'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    Order Tracking
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/login'
                                    className='text-sm text-neutral-content/60 hover:text-neutral-content transition-colors'
                                >
                                    My Account
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className='border-t border-neutral-content/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <p className='text-xs text-neutral-content/40'>
                        &copy; {new Date().getFullYear()} Comfy. All rights reserved.
                    </p>
                    <p className='text-xs text-neutral-content/40'>
                        A{' '}
                        <span className='text-neutral-content/60'>Fullstack Forge</span>{' '}
                        showcase project
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
