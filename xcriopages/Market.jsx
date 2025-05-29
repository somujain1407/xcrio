import React from 'react'
import "/src/Market.css"
import market from "./market-logo.jpg"
import market2 from "./market-2.jpg"

const Market = () => {
    return (
        <>
            <div className="market-body">
                <div className="inner-market">
                    <div className="market-transparent">
                        <div className="inner-text">
                            <h2 id='trans-h2'>WE ARE DEDICATED</h2>
                            <h1 id='trans-h1'>Digital Marketing</h1><br />
                            <button id='trans-btn'>Home ➜  <a href="">Software Development</a></button>
                        </div>
                    </div>
                </div>

                {/* <-----PART-1---------> */}

                <div className="part1-div">
                    <section class="why-choose-section">
                        <h2 class="title">WHY CHOOSE US?</h2>
                        <p class="subtitle">Choose Excellence, Choose Results: Leading Digital Marketing Agency</p>

                        <div class="why-choose-content">
                            <div class="image-container">
                                <img src={market2} alt="Digital Marketing" class="image" />
                            </div>

                            <div class="text-container">
                                <p>
                                    At <strong>Xcrino Business Solutions</strong>, we take pride in being one of the best digital marketing agencies,
                                    dedicated to helping businesses thrive in the online world.
                                    As a leading digital marketing advertising agency, we combine expertise with innovation to drive brand growth
                                    through SEO, social media management, PPC advertising, and content creation.
                                </p>

                                <p>
                                    Our team crafts customized strategies designed to enhance your reach, boost engagement, and deliver measurable
                                    business success. Partner with us to stay ahead in the ever-evolving digital landscape!
                                </p>
                                <a href="#" class="btn">Know More</a>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <----------PART-2-----------> */}
                <div className="foter-body">
                    <section class="services-section">
                        <h2 class="services-title">OUR SERVICES</h2>
                        <p class="services-subtitle">
                            Discover our comprehensive range of services designed to elevate your business. From strategic digital marketing solutions to innovative web design and development, we offer everything you need to thrive in the digital landscape. We, the Leading Digital Marketing Agency help you achieve your goals and exceed expectations.
                        </p>

                        <div class="services-container">
                            <div class="service-box">
                                <h3>Search Engine Optimization (SEO)</h3>
                                <p>
                                    Boost your website’s visibility and traffic with search engine optimization in digital marketing, optimizing content and structure to achieve higher rankings on search engine results pages.
                                </p>
                            </div>

                            <div class="service-box">
                                <h3>Social Media Marketing (SMM)</h3>
                                <p>
                                    Engage your target audience through content creation, community management, and targeted ads with the help of one of the best social media marketing companies.
                                </p>
                            </div>

                            <div class="service-box">
                                <h3>Online Reputation Management (ORM)</h3>
                                <p>
                                    Monitor and manage your brand's online presence, addressing any negative reviews or comments while fostering positive sentiment to maintain a favorable reputation.
                                </p>
                            </div>
                        </div>
<br /><br />
                        {/* <------!!-------> */}

                           <div class="services-container">
                            <div class="service-box">
                                <h3>Content Marketing</h3>
                                <p>
                                   Attract and retain customer by creating and distributing valuable, relevant content such as blogs, videos, and infographics to showcase your expertise and build brand credibility.
                                </p>
                            </div>

                            <div class="service-box">
                                <h3>Email Marketing</h3>
                                <p>
                                   Nurture leads and maintain relationships with customers through targeted email campaigns that deliver personalized content, promotions, and updates.
                                </p>
                            </div>

                            <div class="service-box">
                                <h3>Pay-Per-Click Advertising</h3>
                                <p>
                                   With rigorous testing protocols, we ensure that your iOS app is bug-free, performs optimally across devices, and delivers a flawless user experience.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </>
    )
}
export default Market