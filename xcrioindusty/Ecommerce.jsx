import React from 'react'
// import "/src/Ecommerce.css"
import "/src/xcrioindusty/Ecommerce.css"

export const Ecommerce = () => {
    return (
        <>
            <div className="comerce-body">
                <div className="inner-com">
                    <div className="com-trans">
                        <div className="inner-textcom">
                            <h2 id='trans-h2com'>WE ARE DEDICATED</h2>
                            <h1 id='trans-h1com'> Software Development</h1><br />
                            <button id='trans-btncom'>Home ➜  <a href="">Software Development</a></button>
                        </div>

                    </div>
                </div>

                {/* <-----ONLINE POTENSIAL----------> */}
                <div className="online-body">
                    <section class="ecommerce-section">
                        <div class="content-box">
                            <div class="title-line"></div>
                            <h1>
                                Unleash Your Online Potential with Xcrino's <br />
                                <span class="highlight">E-Commerce Solutions</span>
                            </h1>
                            <div class="underline"></div>
                            <p class="text">
                                Unlock your online potential with Xcrino, a leading eCommerce app development company. Our cutting-edge solutions empower businesses to thrive in the digital marketplace with seamless integration, powerful features, and exceptional customer support.
                            </p>
                            <p class="text">
                                Whether you're a startup or an established enterprise, our tailored approach ensures success. As a trusted eCommerce mobile app development company, we help you enhance your online presence, drive growth, and achieve your business goals effortlessly. Partner with Xcrino today for innovative eCommerce solutions!
                            </p>
                            <div className="online-btn">
                                <a href="#" class="btn">Know More</a>
                            </div>

                        </div>
                    </section>
                </div>

                {/* <------DIGITALMARKET---------> */}
                <div className="digital-body">
                    <section class="section">
                        <div class="content">
                            <h1>Unlock Success in the Digital Marketplace with</h1>
                            <h2 class="highlight">Top Ecommerce App Development Agency!</h2>
                            <div class="line"></div>
                            <p>
                                Achieve digital success with Xcrino's eCommerce website development services. From Shopify website development to mobile optimization, seamless integrations, and data-driven marketing strategies, we help businesses thrive online.
                            </p>
                            <p>
                                Transform your eCommerce vision into reality with tailored solutions designed for growth, scalability, and a seamless shopping experience. Partner with Xcrino today for expert-driven eCommerce success!
                            </p>
                        </div>

                        <div class="accordion">
                            <div class="accordion-item active">
                                <div class="accordion-title blue">1. Custom E-Commerce Website Development <span>↑</span></div>
                                <div class="accordion-content">
                                    <span>
                                        We specialize in creating bespoke E-Commerce websites tailored to your unique business requirements. From user-friendly interfaces to seamless checkout experiences, our solutions are designed to drive conversions and maximize sales.
                                    </span>

                                </div>
                            </div>

                            <div class="accordion-item">
                                <div class="accordion-title">2. Mobile Commerce (M-Commerce) Solutions <span>⌄</span></div>
                            </div>

                            <div class="accordion-item">
                                <div class="accordion-title">3. E-Commerce Platform Integration <span>⌄</span></div>
                            </div>

                            <div class="accordion-item">
                                <div class="accordion-title">4. Payment Gateway Integration <span>⌄</span></div>
                            </div>

                            <div class="accordion-item">
                                <div class="accordion-title">5. E-Commerce Marketing and SEO <span>⌄</span></div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <---------BUSINESS----------> */}

                <div className="platefrom-body">
                    <section class="services-section">
                        <div class="services-header">
                            <h2>Why Choose Xcrino Business Solutions for <br /> <span class="blue-text">E-Commerce Platforms</span>?</h2>
                            <div class="underline"></div>
                            <p>
                                Xcrino Business Solutions offers comprehensive E-Commerce services designed to empower businesses of all sizes to thrive in the digital marketplace.
                            </p>
                        </div>

                        <div class="services-boxes">
                            <div class="service-box fade-in">
                                <img src="https://img.icons8.com/ios/50/user-group-man-man.png" alt="Expertise Icon" />
                                <h3>Expertise</h3>
                                <p>
                                    Benefit from our extensive experience in E-Commerce development, ensuring top-notch solutions tailored to your business needs.
                                </p>
                            </div>

                            <div class="service-box fade-in delay1">
                                <img src="https://img.icons8.com/ios/50/gears.png" alt="Integration Icon" />
                                <h3>Integration</h3>
                                <p>
                                    Seamlessly integrate your E-Commerce platform with leading solutions like Shopify, WooCommerce, and Magento for enhanced functionality and efficiency.
                                </p>
                            </div>

                            <div class="service-box fade-in delay2">
                                <img src="https://img.icons8.com/ios/50/headset.png" alt="Support Icon" />
                                <h3>Support</h3>
                                <p>
                                    Receive dedicated customer support throughout the development and maintenance of your E-Commerce platform, ensuring a smooth experience.
                                </p>
                            </div>
                        </div>

                        {/* <--------> */}

                        <div class="services-boxes">
                            <div class="service-box fade-in">
                                <img src="data:image/jpeg;base64,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" alt="Expertise Icon" />
                                <h3>Customization</h3>
                                <p>
                                    Enjoy fully customized E-Commerce platforms that reflect your brand identity and offer a unique shopping experience to your customers.
                                </p>
                            </div>

                            <div class="service-box fade-in delay1">
                                <img src="data:image/png;base64,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" alt="Integration Icon" />
                                <h3>Security</h3>
                                <p>
                                    Rest assured knowing your customers' data is protected with robust security measures and compliance with industry standards and regulations.
                                </p>
                            </div>

                            <div class="service-box fade-in delay2">
                                <img src="data:image/png;base64,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" alt="Support Icon" />
                                <h3>Innovation</h3>
                                <p>
                                    Stay ahead with our commitment to continuous improvement, incorporating the latest technologies to keep your online business competitive and successful.
                                </p>
                            </div>
                        </div>

                    </section>
                </div>
            </div>

        </>
    )
}
