import { Container } from '@mui/material'
import React, { useState } from 'react'
import styles from './questions.module.scss'
import {
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary
} from '@mui/material'
import { PlusIcon, MinusIcon } from '../../svg.js'

const questions = [
  {
    id: 0,
    title:
      "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
    // title:
    //   'I have no knowledge and experience in this field. Will I have a trouble in mastering the lessons?',
    subtitle:
      "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
    // subtitle:
    //   'Our training programs are taught from 0. You need a Pre-intermediate English level.'
  },
  {
    id: 1,
    title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
    //title: 'Do I need a computer to study the course?',
    subtitle:
      "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
    // subtitle:
    //   'The course is taught by teaching practical tasks using a laptop. So you definitely need a laptop.'
  },
  {
    id: 2,
    title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
    // title: 'How to pay for the course?',
    subtitle:
      "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
    // subtitle:
    //   'Payments for the course are accepted monthly or at the beginning of the month. You can pay for the course by cash or online payment (Uzcard, HUMO).'
  }
  // {
  //   id: 3,
  //   // title: "Kursdan foyda olmasam, pulim qaytarilib beriladimi?",
  //   title: "If I don't benefit from the course, will I get a refund?",
  //   // subtitle: "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin.",
  //   subtitle: 'You can refund full amount within 2 weeks.'
  // }
]

function Question({ question, feedbackInvisible }) {
  const [expanded, setExpanded] = useState('')
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div
      className={`${styles.question} ${
        feedbackInvisible && styles.feedback_invisible
      }`}
    >
      <Container className='container'>
        <h2 className={styles.question_title}>
          Ko'p so'raladigan savollar
          {/* Frequently asked questions */}
        </h2>
        <div
          className={styles.question_accordion_content}
          id='question_content'
        >
          {questions?.map((item) => (
            <Accordion
              key={item?.id}
              className={styles.accordion}
              id='accordion'
              expanded={expanded === `panel${item?.id}`}
              onChange={(event, isExpanded) =>
                handleChange(isExpanded, `panel${item?.id}`)
              }
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${item?.id}` ? <MinusIcon /> : <PlusIcon />
                }
                aria-controls='panel1bh-content'
                id='question_accordion'
                style={{
                  backgroundColor: feedbackInvisible ? '#F3F7FF' : '#FFF'
                }}
              >
                <Typography
                  className={styles.question_accordion_title}
                  sx={{ flexShrink: 0 }}
                >
                  {item?.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                className={styles.question_accordion_details}
                style={{
                  backgroundColor: feedbackInvisible ? '#F3F7FF' : '#FFF'
                }}
              >
                <Typography className={styles.question_accordion_subtitle}>
                  {item?.subtitle}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Question
