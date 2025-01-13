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
  'skyshop.png',
  'skynet.png',
]

const opjhomes = [
  'Logo-design.jpg',
  'Democracy-day.jpg',
  'Father-day.jpg',
  'Illeya.jpg',
  'Motivation.jpg',
  'New-week.jpg',
  'Promo.jpg',
  'Who-is-a-realtor.jpg',
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
            height: '400px',
            border: '1px solid var(--gray-alpha-200)',
            borderRadius: '20px',
            background: 'black',
          }}>
            <Image
              aria-hidden
              src="/enthusiastic-creative-goodlooking-black-young-woman-wearing-sweater-headband-excellent-plan-smiling.png"
              alt="Globe icon"
              width={2000}
              height={2000}

              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </figure>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '20px',
        }}>
          {brands.map((brand, i) => (
            <Image
              key={i}
              aria-hidden
              src={`/brands/${brand}`}
              alt={brand}
              width={1000}
              height={1000}

              style={{
                width: 'auto',
                height: '40px',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          ))}
        </div>

        <div className={styles.banner}>
          <h1>
            We craft <em>experiences</em> that help brands stand out.
          </h1>

          <div>
            <span></span>
            <p>
            Our mission at Marvix Digital Agency is to help businesses and brands thrive by delivering cutting-edge digital marketing solutions that drive growth, engagement, and success.
            </p>
          </div>
          <div>
            <span></span>

            <p>
            To be recognized as a leading digital agency that transforms businesses and brands by delivering innovative, results-driven marketing strategies.
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

        <div className={styles.services} id="services">
          {
            solutions.map((solution, i) => (
              <div key={i} className={styles.service_tab}>
                <div className={styles.title}>
                  <Image
                    aria-hidden
                    src="/globe-pointer.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
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
              **We offer personalized packages for unique projects. With a 50% upfront payment, 50% upon completion (or monthly subscriptions for ongoing services).
            and 10% off for referrals as a referral discount.
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
                <li>One-on-one session to discuss your brand or marketing challenges.</li>
                <li>Strategic insights and actionable steps to elevate your business.</li>
              </ul>
            </div>
            <div>
              <h4>Growth Consultation (3 Hours): ₦120,000</h4>

              <ul>
                <li>Comprehensive review of your brand, marketing efforts, and digital presence.</li>
                <li>A tailored growth strategy with recommendations across content, design, and campaigns.</li>
              </ul>
            </div>
            <div>
              <h4>Premium Consultation (3 Hours + Reports): ₦250,000</h4>
              
              <ul>
                <li>In-depth audit of your business's branding, advertising, and web presence.</li>                
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
            What <em>others</em> are saying about us.
          </h1>

          <div>
            {
              reviews.map((review, i) => ( 
                <figure key={i}>
                  <h4>Client {i + 1}</h4>
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
      <footer className={styles.footer} id="contact">
        
        <div>
          <h1>
            Get in touch <em>with</em> us.
          </h1>
          <br />

          <div className={styles.contact}>
            <div>
              <ul>
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
                    X (Twitter)
                  </a>
                </li>
              </ul>
              <div>
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
                  Send us an Email
                </a>
              </div>
            </div>
            
            <h4>&copy; Marvix Digital Agency, {new Date().getFullYear()}</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}
