import React from 'react'
import { Container } from '@mui/material'

import styles from './features.module.scss'
import {
  FeatureIcon1,
  FeatureIcon2,
  FeatureIcon3,
  FeatureIcon4
} from '../../svg'

const data = [
  // {
  //   id: 0,
  //   img: <FeatureIcon1 />,
  //   title: "Katta Maqsadlar",
  //   // title: "Mentors with experience in large projects",
  //   subtitle:
  //     "O'z ishini ustalari"
  //   // subtitle: "Our mentors have participated in at least 3 projects."
  // },
  {
    id: 1,
    img: <FeatureIcon2 />,
    title: "Katta tajriba",
    // title: "Specialists who master their work",
    subtitle:
      "Bu yonalish boyicha katta tajribaga ega mutahasislar"
    // subtitle: "Our mentors now conduct their activities in large companies."
  },
  {
    id: 2,
    img: <FeatureIcon3 />,
    title: "Qulay narx",
    // title: "We will help you get the skills",
    subtitle:
      "Bizning maqsadimiz katta pul topish emas, sayyohlarni tanishdirish"
    // subtitle: "Our goal is to train specialists with skills, not knowledge."
  },
  {
    id: 3,
    img: <FeatureIcon4 />,
    title: "Katta tanlov",
    // title: "No more than 15 students",
    subtitle: 'Sayohat qilinadigan joylarning kopligi'
    // subtitle: "In our study groups, no more than 15 students are trained."
  }
]

function Features() {
  return (
    <div className={styles.features}>
      <Container className='container'>
        <h2 className={styles.title}>
          Nega aynan biz
          {/* Why us? */}
        </h2>
        <div className={styles.features_content}>
          {data?.map((item) => (
            <div key={item?.id} className={styles.features_content_item}>
              <div className={styles.features_content_icon}>{item?.img}</div>
              <div className={styles.features_content_context}>
                <h4>{item?.title}</h4>
                <p>{item?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Features
