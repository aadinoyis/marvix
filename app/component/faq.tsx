"use client"
import styles from "@/app/page.module.css"
import { faqData } from "@/data/faq"
import { useState } from "react"

export default function Faq() {
  const [next, setNext] = useState<number>()

  const handleNext = (index: number) => {
    if (index == next) {
      setNext(undefined);
      return;
    }
    setNext(index)
  } 
  return (
    <div className={styles.faq} id="faq">
      <h1>Frequently Asked <em>Questions</em></h1>
      <br /><br />
      <ul>
        {
          faqData.map((faq, index) => (
            <li key={index} onClick={() => handleNext(index)}>
              <h4 className={styles.question}>{faq.question}</h4>
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
