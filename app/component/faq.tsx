"use client"
import styles from "@/app/page.module.css"
import { faqData } from "@/data/faq"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Faq() {
  const [next, setNext] = useState<number>()

  const handleNext = (index: number) => {
    if (index == next) {
      setNext(undefined);
      return;
    }
    setNext(index)
  }

  useEffect(()=>{
    setNext(0)
  },[])

  return (
    <div className={styles.faq} id="faq">
      <h1>Frequently Asked <em>Questions</em></h1>
      <br /><br />
      <ul>
        {
          faqData.map((faq, index) => (
            <li key={index} onClick={() => handleNext(index)}>
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
              }}>
                <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9zm5-9a1.5 1.5 0 0 1 -1.5 1.5h-2v2a1.5 1.5 0 0 1 -3 0v-2h-2a1.5 1.5 0 0 1 0-3h2v-2a1.5 1.5 0 0 1 3 0v2h2a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
                <h4 className={styles.question}>{faq.question}</h4>
              </div>
              {
                next == index &&
                <p className={styles.answer}>{faq.answer}</p>
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
