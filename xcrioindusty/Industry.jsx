import React from 'react'
// import "/src/Industry.css"
import "/src/xcrioindusty/Industry.css"

import tech from "./technology.png"
import shoping from "./onlineshooping.png"
import money from "./money.png"
import health from "./healthcare.jpg"
import engineering from "./engineering.png"
import education from "./education.png"

export const Industry = () => {
    return (
        <>
            <div className="industry-body">
                <div className="inner-industry">
                    <div className="inner-industry">
                        <div className="body-industry">
                            <div className="industry-text">
                                <h2 id='trans-h2industry'>WE ARE DEDICATED</h2>
                                <h1 id='trans-h1industry'> Software Development</h1><br />
                                <button id='trans-btnindustry'>Home ➜  <a href="">Software Development</a></button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <------- TAILOR -------> */}
                <div className="tailor-body">
                    <section class="sector-section">
                        <div class="container">
                            <div class="image-box animate-left">
                                <img src="https://www.xcrino.com/wp-content/uploads/2024/02/pexels-mikhail-nilov-6930893-e1732087923101.jpg" alt="Tablet and Business Stats" />
                            </div>
                            <div class="text-box animate-right">
                                <h2>Unlocking Industry Excellence: Our Tailored Solutions for Every Sector</h2>
                                <p>
                                    Unlocking Industry Specific Expertise: Our Tailored Solutions for Every Sector by Xcrino Business Solutions encapsulates our commitment to providing specialized solutions tailored to the unique needs of various industries. From technology to healthcare, finance to hospitality, we leverage our expertise to deliver innovative and effective strategies.
                                    With Xcrino, businesses can unlock the full potential of their industry, driving growth, efficiency, and success in an ever-evolving marketplace.
                                </p>
                                <div className="tailor-btn">
                                    <a href="#" class="btn">Know More</a>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>

                {/* <--------UNLEASING---------> */}
                <div className="unleasing-body">
                    <div class="section">
                        <h2 class="heading">Unleashing Industry Specific Expertise</h2>
                        <div class="subheading">Custom Solutions Crafted for Success with Xcrino Business Solutions!</div>
                        <p class="text">
                            With our specialized expertise, we offer tailored solutions to address the distinct needs of various sectors.
                            Our team comprises industry veterans and subject matter experts who bring invaluable insights and experience to the table.
                        </p>
                        <br /><br /><br />
                        <div class="cards">
                            <div class="card">
                                <img id='card-1' src={tech} alt="Tech Icon" class="icon" />
                                <h3 class="title">Technology and IT</h3>
                                <p class="desc">Providing a range of IT services including software development, cybersecurity, cloud computing, etc.</p>
                            </div>

                            <div class="card">
                                <div class="badge">FEATURED</div>
                                <img id='card-2' src={money}  alt="Finance Icon" class="icon" />
                                <h3 class="title">Finance and Banking</h3>
                                <p class="desc">With extensive finance expertise, we offer fintech, risk, compliance, & digital banking solutions.</p>
                            </div>

                            <div class="card">
                                <div class="badge">FEATURED</div>
                                <img id='card-3' src={health}  alt="Healthcare Icon" class="icon" />
                                <h3 class="title">Healthcare and Life Sciences</h3>
                                <p class="desc">Tailored solutions for medical facilities, ensuring efficient operations.</p>
                            </div>
                        </div>
                        <br />
                        <div class="cards">
                            <div class="card">
                                <img id='card-4' src={shoping} alt="Tech Icon" class="icon" />
                                <h3 class="title">Retail and E-commerce</h3>
                                <p class="desc">Innovation technology for seamless retail experiences, enhancing customer satisfaction</p>
                            </div>

                            <div class="card">
                                <div class="badge">FEATURED</div>
                                <img id='card-5' src={education}  alt="Finance Icon" class="icon" />
                                <h3 class="title">Education and E-learning</h3>
                                <p class="desc">Customized platforms to facilitate learning and administration</p>
                            </div>

                            <div class="card">
                                <div class="badge">FEATURED</div>
                                <img id='card-6' src={engineering}  alt="Healthcare Icon" class="icon" />
                                <h3 class="title">Manufacturing and Engineering</h3>
                                <p class="desc">Streamlined systems for increased productivity and quality control</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
