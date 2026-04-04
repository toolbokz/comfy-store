const DataPrivacy = () => {
    return (
        <section>
            {/* Header */}
            <div className='bg-base-200/50 border-b border-base-300/50'>
                <div className='align-element py-16 sm:py-20'>
                    <p className='label-text-premium mb-4'>Legal</p>
                    <h1 className='heading-xl'>Privacy Policy</h1>
                    <p className='body-lg mt-4'>
                        Last updated: January 1, 2026
                    </p>
                </div>
            </div>

            <div className='align-element py-16 sm:py-20'>
                <div className='max-w-3xl space-y-12'>
                    {/* Introduction */}
                    <div>
                        <h2 className='heading-md mb-4'>Introduction</h2>
                        <p className='body-lg'>
                            At Comfy, your privacy matters. This Privacy Policy explains
                            how we collect, use, disclose, and safeguard your information
                            when you visit our website and make purchases. Please read
                            this policy carefully. By using our site, you consent to the
                            practices described herein.
                        </p>
                    </div>

                    {/* Information We Collect */}
                    <div>
                        <h2 className='heading-md mb-4'>Information We Collect</h2>
                        <div className='space-y-6'>
                            <div>
                                <h3 className='font-serif text-xl font-medium mb-2'>
                                    Personal Information
                                </h3>
                                <p className='body-lg'>
                                    When you create an account, place an order, or contact
                                    us, we may collect your name, email address, shipping
                                    address, billing address, phone number, and payment
                                    information. Payment details are processed securely
                                    through our third-party payment processors and are
                                    never stored on our servers.
                                </p>
                            </div>
                            <div>
                                <h3 className='font-serif text-xl font-medium mb-2'>
                                    Browsing Information
                                </h3>
                                <p className='body-lg'>
                                    We automatically collect certain information when you
                                    visit our site, including your IP address, browser
                                    type, operating system, referring URLs, and browsing
                                    behavior. This data helps us understand how visitors
                                    interact with our site and improve your experience.
                                </p>
                            </div>
                            <div>
                                <h3 className='font-serif text-xl font-medium mb-2'>
                                    Cookies &amp; Tracking
                                </h3>
                                <p className='body-lg'>
                                    We use cookies and similar technologies to personalize
                                    your experience, remember your preferences, and
                                    analyze site traffic. You can manage cookie preferences
                                    through your browser settings at any time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How We Use Your Information */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            How We Use Your Information
                        </h2>
                        <ul className='space-y-3'>
                            {[
                                'Process and fulfill your orders, including shipping and returns',
                                'Send order confirmations, shipping updates, and customer service communications',
                                'Improve our website, products, and overall customer experience',
                                'Personalize product recommendations and content',
                                'Detect and prevent fraudulent activity and security threats',
                                'Comply with applicable legal obligations',
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

                    {/* Information Sharing */}
                    <div>
                        <h2 className='heading-md mb-4'>Information Sharing</h2>
                        <p className='body-lg'>
                            We do not sell your personal information to third parties.
                            We may share your data with trusted service providers who
                            assist us in operating our business — including payment
                            processors, shipping carriers, and analytics providers.
                            These partners are contractually obligated to protect your
                            information and use it only for the services they provide
                            to us.
                        </p>
                        <p className='body-lg mt-4'>
                            We may also disclose information when required by law,
                            to protect our rights, or in connection with a business
                            transfer such as a merger or acquisition.
                        </p>
                    </div>

                    {/* Data Security */}
                    <div>
                        <h2 className='heading-md mb-4'>Data Security</h2>
                        <p className='body-lg'>
                            We implement industry-standard security measures to protect
                            your personal information, including SSL encryption for all
                            data transmitted between your browser and our servers. While
                            no method of transmission over the internet is completely
                            secure, we take all reasonable precautions to safeguard your
                            data.
                        </p>
                    </div>

                    {/* Your Rights */}
                    <div>
                        <h2 className='heading-md mb-4'>Your Rights</h2>
                        <p className='body-lg'>
                            Depending on your jurisdiction, you may have the right to
                            access, correct, delete, or port your personal data. You
                            may also opt out of marketing communications at any time
                            by using the unsubscribe link in our emails or by
                            contacting us directly.
                        </p>
                    </div>

                    {/* Children's Privacy */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Children&apos;s Privacy
                        </h2>
                        <p className='body-lg'>
                            Our services are not directed to individuals under the age
                            of 16. We do not knowingly collect personal information
                            from children. If you believe we have inadvertently collected
                            such information, please contact us so we can promptly
                            remove it.
                        </p>
                    </div>

                    {/* Changes to This Policy */}
                    <div>
                        <h2 className='heading-md mb-4'>
                            Changes to This Policy
                        </h2>
                        <p className='body-lg'>
                            We may update this Privacy Policy from time to time to
                            reflect changes in our practices or applicable law. We will
                            notify you of any material changes by posting the updated
                            policy on this page and updating the &ldquo;Last
                            updated&rdquo; date above.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className='border-t border-base-300/50 pt-12'>
                        <h2 className='heading-md mb-4'>Contact Us</h2>
                        <p className='body-lg'>
                            If you have questions or concerns about this Privacy Policy
                            or our data practices, please reach out to us at{' '}
                            <span className='text-secondary'>
                                privacy@comfyfurniture.com
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DataPrivacy;
