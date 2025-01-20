import Image from "next/image";
import styles from "./page.module.css";
import Faq from "./component/faq";
import Pricing from "./component/pricing";
import { services } from "@/data/services";
import Header from "./component/header";

const brands = [
  'asemas.png',
  'nylamart.png',
  'obasplace.png',
  'opjhomes.png',
  'skynet.png',
  'skyshop.png'
]

const opjhomes = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
  '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '27.jpg',
  '28.jpg',
  '29.jpg',
  '30.jpg',
  '31.jpg',
  '32.jpg',
  '33.jpg',
  '34.jpg',
  '35.jpg',
  '36.jpg',
  '37.jpg',
  '38.jpg',
  '39.jpg',
  '40.jpg',
  '41.jpg',
  '42.jpg',
  '43.jpg',
]

const reviews = [
  "Working with this agency was an absolute dream. Their designs are nothing short of breathtaking — every piece reflects a level of creativity and elegance that's hard to find elsewhere. I felt completely confident in their ability to deliver, and they exceeded my expectations in every way. If you're looking for reliability and designs that truly stand out, this is the team to trust!",
  "I've worked with a number of digital agencies in the past, but none have come close to the level of service and quality that Marvix Digital Agency provides. They're professional, creative, and incredibly responsive. I couldn't be happier with the results of our collaboration, and I'm excited to continue working with them in the future.",
]

const solutions = [
  {
    title: "Content Creation & Strategy",
    content: "At Marvix Digital Agency, we craft compelling content that resonates with your audience. Whether it's through thought-leadership blogs, engaging content, or high-converting copy, we deliver the content that drives results.",
    cta: "#content_creation",
  },
  {
    title: "Branding & Graphic Design",
    content: "Your brand identity is more than just a logo. It’s the voice, personality, and trust that connects you with your customers. Let us help you define your brand with a stunning visual identity.",
    cta: "#branding_graphics_design",
  },
  {
    title: "Email Marketing & Automation",
    content: "Engage your audience with personalized email campaigns that drive action. From nurturing leads to retaining customers, we ensure your emails are impactful and effective.",
    cta: "#email_marketing_automation",
  },
  {
    title: "Pay-Per-Click Advertising",
    content: "Reach your ideal customers with laser-focused PPC campaigns. Whether you’re promoting a new product or growing your brand, our ads deliver measurable results that align with your goals.",
    cta: "#ppc_advertising",
  },
  {
    title: "Web Design & Development",
    content: "Your website is the first impression customers have of your business. We design and develop responsive, visually appealing websites that deliver great user experiences and drive conversions.",
    cta: "#web_design_development",
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.engagement}>Get 10% off on all services from now till March 2025.</div>
      
          <h1>
            Transforming <em>Ideas</em> into Digital Excellence.
          </h1>
          
          <p>
              Helping businesses and brands thrive by delivering cutting-edge digital marketing solutions that drive growth, engagement, and success.
          </p>

          <div className={styles.ctas}>
            <a
              href="mailto:Marvixdigital@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              <Image
                aria-hidden
                src="/globe-pointer.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Get Started
            </a>
            <a
              href="#services"
              className={styles.secondary}
            >
              <Image
                aria-hidden
                src="/globe-pointer.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Learn More
            </a>
          </div>

          <figure style={{
            width: '100%',
            height: 'auto',
            
            borderRadius: '20px',
            
          }}>
            <Image
              aria-hidden
              src="/c41f087d99fa7b206f5a3271744b9dae-transformed.jpeg"
              alt="Hero image"
              width={2000}
              height={2000}

              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '600px',
                borderRadius: '20px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </figure>
        </div>

        <div className={styles.prevBrands}>
          <h1>Brands we&apos;ve <em>worked</em> with</h1>
          <p>These brands have given us the chance and have put their trust in us to grow their business.</p>
          <div className={styles.allBrands}>
            {brands.map((brand, i) => (
              <div key={i} className={styles.brand}>
                <Image
                  aria-hidden
                  src={`/brands/${brand}`}
                  alt={brand}
                  width={1000}
                  height={1000}
  
                  style={{
                    width: 'auto',
                    height: '60px',
                    objectFit: 'contain',
                    objectPosition: '5% center',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.banner}>
          <h1>
            Solutions that <em>scales</em> your business.
          </h1>

          <div>
            <div className={styles.text}>
              <p>
                We provide simple and flexible way to build your business and outperform your competitors by levering on our expertise and years of experience and cutting out expenses on untested methods.
              </p>
              
              <br />

              <div className={styles.ctas}>
                <a
                  href="mailto:Marvixdigital@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                >
                  <Image
                    aria-hidden
                    src="/globe-pointer.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
                  Get Started
                </a>
                <a
                  href="#packages"
                  className={styles.secondary}
                >
                  <Image
                    aria-hidden
                    src="/globe-pointer.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
                  Learn More
                </a>
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                aria-hidden
                src="/872f64ff5d4d7e9cae695c80886b1594-removebg-preview.png"
                alt="Globe icon"
                width={1000}
                height={1000}

                style={{
                  height: '400px',
                  width: 'auto',
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.services} id="services">
          {
            solutions.map((solution, i) => (
              <div key={i} className={styles.service_tab}>
                <div className={styles.title}>
                <div className={styles.icon}>
                    <Image
                      aria-hidden
                      src="/globe-pointer.svg"
                      alt="Globe icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  {solution.title}
                </div>
                <div className={styles.content}>
                  {solution.content}
                </div>
                <a
                  href={solution.cta}
                  className={styles.secondary}
                >
                  <Image
                    aria-hidden
                    src="/globe-pointer.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
                  Learn More
                </a>
              </div>
            ))
          }
        </div>

        <div className={styles.banner} id="works">
          <h1>
            Some of our <em>Works</em>
          </h1>
          <p>From Content creation to Branding, we make sure to be very intuitive and we always end up with good performance and high return.
          </p>

        
          <figure className={styles.works}>
            {opjhomes.map((brand, i) => (
              <Image
                key={i}
                aria-hidden
                src={`/works/${brand}`}
                alt={brand}
                width={1000}
                height={1000}
              />
            ))}

          </figure>
        </div>

        <div className={styles.packages} id="packages">
          <h1>Pick a <em>Package</em> and go for it</h1>
          <br /><br />
          <div className={styles.all_packages}>
            <Pricing service={services.brandingGraphicsDesign} id="branding_graphics_design"/>
            <Pricing service={services.contentCreation} id="content_creation"/>
            <Pricing service={services.emailMarketingAutomation} id="email_marketing_automation"/>
            <Pricing service={services.ppcAdvertising} id="ppc_advertising"/>
            <Pricing service={services.webDesignDevelopment} id="web_design_development"/>
            <Pricing service={services.discountsBundles} id="discounts"/>
          </div>
        </div>

        <div className={styles.package_wrapper}>          
          <div className={styles.package_division}>
            <p>
              **We offer personalized packages for unique projects with a 50% upfront payment and 50% upon completion (or monthly subscriptions for ongoing services).
            We also give 10% off for referrals as a referral discount.
            </p>
          </div>
        </div>

        

        <div className={styles.hero}>
          <h1>
            Looking for <em>Expert</em> Guidance?
          </h1>

          <p>
          Our tailored consultations are designed to help you overcome challenges and unlock growth opportunities.
          </p>

          <div className={styles.consultation}>
            <div>
              <h4>Basic Consultation (2 Hour): ₦50,000</h4>

              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path d="m17.582,8.461c.573.597.555,1.547-.043,2.121l-4.605,4.424c-.668.659-1.552.989-2.438.989s-1.774-.33-2.451-.991l-1.547-1.388c-.616-.554-.667-1.502-.113-2.118.554-.615,1.5-.668,2.119-.113l1.592,1.43c.237.23.555.232.746.042l4.62-4.438c.597-.574,1.545-.557,2.121.042Zm6.418,3.539c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"/>
                  </svg>
                  One-on-one session to discuss your brand or marketing challenges.</li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path d="m17.582,8.461c.573.597.555,1.547-.043,2.121l-4.605,4.424c-.668.659-1.552.989-2.438.989s-1.774-.33-2.451-.991l-1.547-1.388c-.616-.554-.667-1.502-.113-2.118.554-.615,1.5-.668,2.119-.113l1.592,1.43c.237.23.555.232.746.042l4.62-4.438c.597-.574,1.545-.557,2.121.042Zm6.418,3.539c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"/>
                  </svg>
                  Strategic insights and actionable steps to elevate your business.
                </li>
              </ul>
            </div>
            <div>
              <h4>Growth Consultation (3 Hours): ₦120,000</h4>

              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path d="m17.582,8.461c.573.597.555,1.547-.043,2.121l-4.605,4.424c-.668.659-1.552.989-2.438.989s-1.774-.33-2.451-.991l-1.547-1.388c-.616-.554-.667-1.502-.113-2.118.554-.615,1.5-.668,2.119-.113l1.592,1.43c.237.23.555.232.746.042l4.62-4.438c.597-.574,1.545-.557,2.121.042Zm6.418,3.539c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"/>
                  </svg>
                  Comprehensive review of your brand, marketing efforts, and digital presence.
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path d="m17.582,8.461c.573.597.555,1.547-.043,2.121l-4.605,4.424c-.668.659-1.552.989-2.438.989s-1.774-.33-2.451-.991l-1.547-1.388c-.616-.554-.667-1.502-.113-2.118.554-.615,1.5-.668,2.119-.113l1.592,1.43c.237.23.555.232.746.042l4.62-4.438c.597-.574,1.545-.557,2.121.042Zm6.418,3.539c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"/>
                  </svg>
                  A tailored growth strategy with recommendations across content, design, and campaigns.
                </li>
              </ul>
            </div>
            <div>
              <h4>Premium Consultation (3 Hours + Reports): ₦250,000</h4>
              
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path d="m17.582,8.461c.573.597.555,1.547-.043,2.121l-4.605,4.424c-.668.659-1.552.989-2.438.989s-1.774-.33-2.451-.991l-1.547-1.388c-.616-.554-.667-1.502-.113-2.118.554-.615,1.5-.668,2.119-.113l1.592,1.43c.237.23.555.232.746.042l4.62-4.438c.597-.574,1.545-.557,2.121.042Zm6.418,3.539c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"/>
                  </svg>
                  In-depth audit of your business&apos;s branding, advertising, and web presence.
                </li>                
              </ul>
            </div>
          </div>

          <div className={styles.ctas}>
            
            <a
              href="mailto:Marvixdigital@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              <Image
                aria-hidden
                src="/globe-pointer.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Book a Consultation Today!
            </a>
          </div>
        </div>

        <div className={styles.banner}>
          <h1>
            We craft <em>experiences</em> that help brands stand out.
          </h1>

          <div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                aria-hidden
                src="/a75a994d1ccee2bb3a9622e01311d6eb-removebg-preview.png"
                alt="Globe icon"
                width={1000}
                height={1000}

                style={{
                  height: '400px',
                  width: 'auto',
                }}
              />
            </div>
            <div className={styles.text}>
              <p>
                Our mission at Marvix Digital Agency is to help businesses and brands thrive by delivering cutting-edge digital marketing solutions that drive growth, engagement, and success.
              </p>
              <br />
              <p>
                To be recognized as a leading digital agency that transforms businesses and brands by delivering innovative, results-driven marketing strategies.
              </p>
              <br />

              <div className={styles.ctas}>
                <a
                  href="mailto:Marvixdigital@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                >
                  <Image
                    aria-hidden
                    src="/globe-pointer.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
                  Get Started
                </a>
                <a
                  href="#packages"
                  className={styles.secondary}
                >
                  <Image
                    aria-hidden
                    src="/globe-pointer.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        

        <div className={styles.banner}>
          <h1>
            What <em>others</em> are saying about us.
          </h1>

          <div>
            {
              reviews.map((review, i) => ( 
                <figure key={i} className={styles.review}>
                  <h3>Client {i + 1}</h3>
                  <p>
                    &quot;{review}&quot;
                  </p>
                </figure>
              ))
            }
          </div>
          <div>
            <h3>4.9/5 ⭐⭐⭐⭐⭐</h3>

            <div className={styles.ctas}>
              <a
                href="mailto:Marvixdigital@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                <Image
                  aria-hidden
                  src="/globe-pointer.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Get Started
              </a>
              <a
                href="#contact"
                className={styles.secondary}
              >
                <Image
                  aria-hidden
                  src="/globe-pointer.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Faq />
      <div className={styles.hero}>
        <h1>
          Ready to <em>Upscale</em> your business?
        </h1>

        <p>
        Our well trained experts with years of experiences are equiped to help you grow your business and unlock new opportunities.
        </p>
      </div>
      <footer className={styles.footer} id="contact">
      
          <h1>
            Get in touch <em>with</em> us.
          </h1>
          <br />

          <div className={styles.contact}>
            <div>
              <Image
                aria-hidden
                src="/Marvix-Digital-Agency.png"
                alt="Mervix Digital Agency"
                width={1000}
                height={1000}
  
                style={{
                  width: 'auto',
                  height: '100px',
                }}
              />

              <br /> <br />

              <p>
                To be recognized as a leading digital agency that transforms businesses and brands by delivering innovative, results-driven marketing strategies.
              </p>

              <br />

              <a
                href="mailto:Marvixdigital@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                <Image
                  aria-hidden
                  src="/globe-pointer.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Send us an Email
              </a>
              
            </div>
            <div>
            <h4>&copy; Marvix Digital Agency, {new Date().getFullYear()}</h4>
            <br />
              <ul style={{
                flexDirection: 'row',
              }}>
                <li>
                  <a 
                    href="https://www.instagram.com/marvixdigitalagency/profilecard/?igsh=MWxjbXE2cjJmamZiOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61571932946958&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a 
                    href="tel:+234 901 415 0476"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +234 901 415 0476
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+234 810 472 3945"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +234 810 472 3945
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Marvixdigital@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marvixdigital@gmail.com
                  </a>
                </li>
              </ul>
              
              
              
              
            </div>
          </div>
        
      </footer>
      <div className={styles.marvix}>MARVIX</div>
    </div>
  );
}
