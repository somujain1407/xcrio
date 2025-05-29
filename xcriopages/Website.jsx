import React from 'react'
import '/src/Website.css'
import craft1 from "./craft-1.jpg"
import web1 from "./web-1.jpg"
import web2 from "./web-2.jpg"
import web3 from "./web-3.jpg"
import web4 from "./web-4.png"
import web5 from "./web-5.png"
import web6 from "./web-6.jpg"
import chose from "./chose-xcrio.jpg"


const Website = () => {
  return (
    <>
      <div className="web-body">
        <div className="innder-web">
          <div className="web-trans">
            <div className="inner-text">
              <h2 id='trans-h2'>WE ARE DEDICATED</h2>
              <h1 id='trans-h1'> Website Development</h1><br />
              <button id='trans-btn'>Home ➜  <a href="">Software Development</a></button>
            </div>
          </div>
        </div>

        {/* <----PART-2------> */}
        <div className="craft-div">
          <section class="hero-section">
            <div class="hero-content">
              <h1 class="hero-title">
                Crafting Digital Experiences: <br />
                Elevate Your Online Presence with <br />
                Our Team of Top Website <br />
                Development Agency
              </h1>
              <p class="hero-subtitle">
                <strong>Welcome to Xcrino Business Solutions</strong>, your trusted partner for website design & development services that transform your digital presence. With a passion for creativity and a commitment to excellence, we craft custom web solutions tailored to your unique business needs.
              </p>
              <p class="hero-description">
                As the best website development company, we understand the power of a well-designed website in today’s competitive market. That’s why our expert team of designers and developers work relentlessly to create stunning, high-performing websites that captivate audiences and drive business growth.
              </p>
              <p class="hero-description">
                Whether you’re a startup building your brand identity or an established enterprise aiming to enhance user experience, we’ve got you covered. From sleek, modern designs to seamless navigation and robust functionality, we ensure that your website looks great and performs flawlessly across all devices.
              </p>
              <p class="hero-call">
                Partner with one of the best web design companies today and unlock the full potential of your online presence. Contact us now to discuss your project and take the first step toward digital success!
              </p>
            </div>
            <div class="hero-image">
              <img id='hero1' src={craft1} alt="Website Development Illustration" />
            </div>
          </section>
        </div>

        {/* <---------PART-3-------> */}.
        <div className="main-biggest">

          <div className="bigest-div">
            <div class="service-banner">
              <h2 class="main-text">Website Designing and Development Company</h2>
              <p class="sub-text">EXPLORE THE SERVICES WE OFFER</p>
            </div>
          </div>

        </div>

        {/* <--------PART-4---------> */}
        <div className="desing-body">
          <div className="desing-trabs">


            <section class="services-section">
              <div class="service-box">
                <img src={web1} alt="Custom Website" class="service-icon" />
                <h3 class="service-title">Custom Website Designing</h3>
                <p class="service-description">
                  Enhance your digital presence with our expert custom website development company.
                  We design stunning, user-friendly websites tailored to your brand identity and goals,
                  ensuring maximum impact and results. Let’s bring your vision to life!
                </p>
              </div>

              <div class="service-box">
                <img src={web2} alt="Responsive Design" class="service-icon" />
                <h3 class="service-title">Responsive Web Design</h3>
                <p class="service-description">
                  We ensure your website adapts seamlessly to any device, providing optimal viewing experiences
                  for users on smartphones, tablets, and desktops. Enhance user engagement and satisfaction with
                  a website that looks and functions flawlessly across all screen sizes and resolutions.
                </p>
              </div>

              <div class="service-box">
                <img src={web3} alt="E-commerce" class="service-icon" />
                <h3 class="service-title">E-commerce Development</h3>
                <p class="service-description">
                  Our eCommerce website design company specializes in building secure, user-friendly online stores
                  tailored to your business needs. From product listings to seamless payment processing, we create
                  engaging shopping experiences that drive sales and business growth.
                </p>
              </div>

              <div class="service-box">
                <img src={web4} alt="CMS" class="service-icon" />
                <h3 class="service-title">Content Management Systems (CMS)</h3>
                <p class="service-description">
                  Content Management Systems (CMS) empower you to easily update and manage website content without
                  technical expertise. With intuitive interfaces and customizable features.
                </p>
              </div>

              <div class="service-box">
                <img src={web5} alt="Maintenance" class="service-icon" />
                <h3 class="service-title">Website Maintenance and Support</h3>
                <p class="service-description">
                  Our Website Maintenance and Support services keep your site running smoothly with routine updates,
                  security patches, and performance optimization.
                </p>
              </div>

              <div class="service-box">
                <img src={web6} alt="Landing Page" class="service-icon" />
                <h3 class="service-title">Landing Page Design</h3>
                <p class="service-description">
                  Landing Page Design focuses on creating compelling and concise web pages tailored to convert
                  visitors into leads or customers.
                </p>
              </div>
            </section>

          </div>

        </div>

        {/* <--------PART5-------> */}

        <div className="chose-body">
          <div className="dev-container">
            <div className="dev-image-section">
              <img src={chose} alt="Developer Working" className="dev-image" />
            </div>
            <div className="dev-content-section">
              <h2>Why should you choose us for Website Development?</h2>
              <p>Choose <strong> Xcrino Business Solutions</strong> for expert website development services and unlock limitless digital potential. With our expertise, dedication, and passion for creating exceptional online experiences, we bring your vision to life.</p>
              <p>From front-end and back-end web development to custom designs and seamless functionality, we ensure your website not only stands out but also delivers real results. As a trusted agency with a proven track record, we specialize in building captivating websites that enhance your online presence and engage your audience.</p>
              <p>Partner with us today and let’s embark on a journey toward digital success together!</p>
              <button className="dev-button">Know More</button>
            </div>
          </div>
        </div>



      </div>

    </>
  )
}
export default Website