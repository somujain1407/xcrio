import React from 'react'
import '/src/Software.css'
import leftphto from "./look-leftimg.jpg"
import Uiux from "./UIUX.png"
import AI from "./xcrio-AI.png"
import block from "./xcrio-block.png"
import human from "./xcrio-human.jpg"
import customer from "./xcrio-customer.png"

const Software = () => {
    return (
        <>
            <div className="software-body">
                <div className="inner-body">
                    <div className="body-trans">
                        <div className="inner-text">
                            <h2 id='trans-h2'>WE ARE DEDICATED</h2>
                            <h1 id='trans-h1'> Software Development</h1><br />
                            <button id='trans-btn'>Home ➜  <a href="">Software Development</a></button>
                        </div>

                    </div>
                </div>

                {/* <----NEXTPART----> */}

                <div className="next-body">
                    <div className="inner-next">

                        <div className="next-1">
                            <span id='next-span1'>Unleash Innovation: Transform Your Vision into Reality with Our Team of Leading Software Development Company</span>
                        </div>
                        <br />
                        <div className="next-2">
                            <span id='next-span2'>At Xcrino Business Solutions, we specialize in turning visionary ideas into real-world solutions through our custom software development services. Our team of expert developers leverages the latest technologies and industry best practices to create tailor-made software that perfectly suits your unique business needs. Whether you’re a startup aiming to disrupt the market or an established company looking to streamline operations, we’re here to help you achieve success.</span>
                        </div>
                        <br />
                        <div className="next-3">
                            <span id='next-span3'>As a leading software development company, we work closely with you from concept to deployment, ensuring we understand your goals and challenges to bring your ideas to life. With a focus on innovation and excellence, we are your trusted partner in navigating the ever-changing tech landscape and driving sustainable growth. Let’s embark on this transformative journey together!</span>
                        </div>
                        <br />
                        <br />
                        <div className="next-4">
                            <button id='next-btn'>Know More</button>
                        </div>

                    </div>
                </div>

                {/* <------PART-2--------> */}
                <div className="look-body">
                    <div className="look-right">
                        <div className="right-1">
                            <p id='right-p'>Looking For Unparalleled
                                <a href="">Software Development</a> Expertise?</p>
                        </div>
                        <br />
                        <br />
                        <div className="right-2">
                            <span id='right-span1'>Discover why Xcrino Business Solutions is your go-to software development agency for all your technology needs. With a proven track record of excellence and innovation, our team offers unmatched expertise in crafting custom solutions that bring your vision to life. Why settle for less when you can collaborate with industry leaders who focus on quality and tangible results?</span>
                        </div>
                        <br />
                        <div className="right-3">
                            <span id='right-span2'>Whether you’re a startup or an established enterprise, we tailor our solutions to meet your unique needs, ensuring seamless integration and maximum impact. As one of the leading AI software development companies and SaaS software development companies, we are committed to delivering cutting-edge solutions that drive your business forward. Partner with us to elevate your business with the best in the industry.</span>
                        </div>
                        <br />
                        <div className="right-4">
                            <span id='right-span3'>Choose Xcrino Business Solutions and embark on a journey of transformation and growth today.</span>
                        </div>
                    </div>
                    <div className="look-left">
                        <img id='left-pic' src={leftphto} alt="" />
                    </div>
                </div>


                {/* <--------PART3----------> */}
                <section class="services-section">
                    <h1 class="title">Services We Offer</h1>
                    <p class="description">
                        The software solutions delivered by Xcrino Business Solutions encompass a wide range of tailored offerings,
                        meticulously crafted to meet the unique needs of our clients. With a focus on innovation and quality, our team ensures that
                        every solution we deliver is robust, scalable, and aligned with the latest industry standards. From custom software development
                        to comprehensive web and mobile application solutions, we pride ourselves on delivering excellence in every project we undertake.
                    </p>

                    <div class="services-container">
                        <div class="service-card">
                            <h2>IoT</h2>
                            <h3>INTERNET OF THINGS (IOT)</h3>
                            <p>
                                Unlock the power of IoT with our comprehensive service offerings. Unlock connected device potential with seamless integration & real-time insights through our end-to-end solutions.
                            </p>
                        </div>

                        <div class="service-card">
                            <img src={Uiux} alt="UI/UX" />
                            <h3>UI/UX DESIGN</h3>
                            <p>
                                Elevate user experience with our UI/UX Design service. We craft interfaces that captivate users, enhancing engagement and driving success for your digital products.
                            </p>
                        </div>

                        <div class="service-card">
                            <img src={AI} alt="AI/ML" />
                            <h3>AI/ML SOLUTIONS</h3>
                            <p>
                                Elevate your software with our AI/ML Solutions. Harness the power of cutting-edge technology to optimize operations, gain insights, and drive innovation.
                            </p>
                        </div>


                    </div>

                    {/* <-------!!--------> */}

                    <div class="services-container1">
                        <div class="service-card">
                            <img src={block} alt="" />
                            <h3>BLOCKCHAIN DEVELOPMENT</h3>
                            <p>
                                Empower your business with our Blockchain development services, leveraging cutting-edge technology for secure, transparent, and efficient
                                solutions.
                            </p>
                        </div>

                        <div class="service-card">
                            <img src={human} alt="UI/UX" />
                            <h3>HUMAN RESOURCE SOFTWARE</h3>
                            <p>
                                Elevate your HR management with our cutting-edge HR software. Streamline processes, enhance efficiency, and empower your team with our customizable SaaS solution.
                            </p>
                        </div>

                        <div class="service-card">
                            <img src={customer} alt="AI/ML" />
                            <h3>CUSTOMER RELATIONSHIP MANAGEMENT(CRM)</h3>
                            <p>
                                Enhance customer relationships with our CRM software. Streamline interactions, improve communication, and seamlessly propel business
                                growth.
                            </p>
                        </div>
                    </div>

                </section>
            </div>

        </>
    )
}

export default Software