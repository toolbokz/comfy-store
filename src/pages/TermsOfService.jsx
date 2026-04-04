const TermsOfService = () => {
    return (
        <section>
            {/* Header */}
            <div className='bg-base-200/50 border-b border-base-300/50'>
                <div className='align-element py-16 sm:py-20'>
                    <p className='label-text-premium mb-4'>Legal</p>
                    <h1 className='heading-xl'>Terms of Service</h1>
                    <p className='body-lg mt-4'>
                        Last updated: January 1, 2026
                    </p>
                </div>
            </div>

            <div className='align-element py-16 sm:py-20'>
                <div className='max-w-3xl space-y-12'>
                    {/* Acceptance */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Acceptance of Terms
                        </h2>
                        <p className='body-lg'>
                            By accessing and using the Comfy website, you agree to be
                            bound by these Terms of Service and all applicable laws and
                            regulations. If you do not agree with any part of these
                            terms, you should not use our site. We reserve the right
                            to modify these terms at any time, and your continued use
                            of the site constitutes acceptance of any changes.
                        </p>
                    </div>

                    {/* Use of the Site */}
                    <div>
                        <h2 className='heading-md mb-4'>Use of the Site</h2>
                        <p className='body-lg'>
                            You may use our site for lawful purposes only. You agree
                            not to:
                        </p>
                        <ul className='mt-4 space-y-3'>
                            {[
                                'Use the site in any manner that could disable, overburden, or impair it',
                                'Attempt to gain unauthorized access to any accounts, systems, or networks',
                                'Use any automated means to scrape, harvest, or extract data from the site',
                                'Transmit any viruses, malware, or other harmful code',
                                'Impersonate another person or entity, or falsely represent your affiliation',
                                'Use the site for any unlawful or fraudulent purpose',
                            ].map((item) => (
                                <li key={item} className='flex gap-3'>
                                    <span className='text-secondary mt-1.5 flex-shrink-0'>
                                        &bull;
                                    </span>
                                    <span className='body-lg'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Accounts */}
                    <div>
                        <h2 className='heading-md mb-4'>Accounts</h2>
                        <p className='body-lg'>
                            When you create an account with us, you are responsible for
                            maintaining the confidentiality of your login credentials
                            and for all activities that occur under your account. You
                            agree to notify us immediately of any unauthorized use of
                            your account. We reserve the right to suspend or terminate
                            accounts that violate these terms.
                        </p>
                    </div>

                    {/* Products & Pricing */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Products &amp; Pricing
                        </h2>
                        <p className='body-lg'>
                            We strive to display product information — including
                            descriptions, images, and pricing — as accurately as
                            possible. However, we do not guarantee that all information
                            is error-free. Prices are subject to change without notice.
                            We reserve the right to limit order quantities and to refuse
                            or cancel any order at our discretion.
                        </p>
                        <p className='body-lg mt-4'>
                            Colors displayed on screen may vary from the actual product
                            due to differences in monitor settings and display
                            technology. We recommend requesting material samples for
                            exact color matching on larger purchases.
                        </p>
                    </div>

                    {/* Orders & Payment */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Orders &amp; Payment
                        </h2>
                        <p className='body-lg'>
                            By placing an order, you represent that all information
                            provided is accurate and complete. All payments are processed
                            securely through our third-party payment providers. An order
                            confirmation does not constitute acceptance of your
                            order — we reserve the right to cancel orders due to pricing
                            errors, stock availability, or suspected fraud.
                        </p>
                    </div>

                    {/* Shipping & Delivery */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Shipping &amp; Delivery
                        </h2>
                        <p className='body-lg'>
                            Estimated delivery times are provided as a guide and are not
                            guaranteed. We are not liable for delays caused by carriers,
                            weather, customs, or other circumstances beyond our control.
                            Risk of loss and title for items pass to you upon delivery
                            to the carrier.
                        </p>
                    </div>

                    {/* Returns & Refunds */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Returns &amp; Refunds
                        </h2>
                        <p className='body-lg'>
                            We offer a 30-day return policy on most items. Products must
                            be returned in their original condition and packaging. Custom
                            or made-to-order items may not be eligible for return. Refunds
                            will be processed to the original payment method within 10
                            business days of receiving the returned item. Shipping costs
                            for returns are the responsibility of the customer unless the
                            return is due to a defect or error on our part.
                        </p>
                    </div>

                    {/* Intellectual Property */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Intellectual Property
                        </h2>
                        <p className='body-lg'>
                            All content on this site — including text, images, graphics,
                            logos, and software — is the property of Comfy or its
                            licensors and is protected by copyright, trademark, and
                            other intellectual property laws. You may not reproduce,
                            distribute, modify, or create derivative works from any
                            content without our express written permission.
                        </p>
                    </div>

                    {/* Limitation of Liability */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Limitation of Liability
                        </h2>
                        <p className='body-lg'>
                            To the fullest extent permitted by law, Comfy shall not be
                            liable for any indirect, incidental, special, consequential,
                            or punitive damages arising from your use of the site or
                            purchase of products. Our total liability for any claim shall
                            not exceed the amount you paid for the product giving rise
                            to the claim.
                        </p>
                    </div>

                    {/* Governing Law */}
                    <div>
                        <h2 className='heading-md mb-4'>Governing Law</h2>
                        <p className='body-lg'>
                            These Terms of Service shall be governed by and construed in
                            accordance with applicable laws, without regard to conflict
                            of law principles. Any disputes arising from these terms
                            shall be resolved through binding arbitration in accordance
                            with applicable arbitration rules.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className='border-t border-base-300/50 pt-12'>
                        <h2 className='heading-md mb-4'>Contact Us</h2>
                        <p className='body-lg'>
                            If you have questions about these Terms of Service, please
                            contact us at{' '}
                            <span className='text-secondary'>
                                legal@comfyfurniture.com
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TermsOfService;
