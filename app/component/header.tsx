'use client'
import styles from "../page.module.css";
import Image from 'next/image';
import { useState } from "react";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <header className={styles.header}>
        <div className={styles.top_bar}>
          <a href="#" className={styles.logo_wrapper}>
            <Image
              aria-hidden
              src="/Marvix-Digital-Agency.png"
              alt="Mervix Digital Agency"
              width={1000}
              height={1000}

              style={{
                width: 'auto',
                height: '50px',
              }}
            />
          </a>

          <nav className={styles.nav}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#works">Portfolio</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">Faq</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
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
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
          
          
            
          <button
            className={styles.bars}
            onClick={toggleMobileNav}
          >
            <Image
              aria-hidden
              src="/bars.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
          </button>
        </div>
        
        {
          isMobileNavOpen && (
            <nav className={styles.mobile_nav}>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#works">Portfolio</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">Faq</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          )
        }
      </header>
  )
}
