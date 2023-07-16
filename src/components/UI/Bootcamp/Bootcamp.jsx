import React from 'react'
import { Container } from '@mui/material'
import Image from 'next/image'

import styles from './bootcamp.module.scss'
import BootcampImg from '../../../../public/images/Bootcamp_banner.webp'
import {
  BootcampIcon1,
  BootcampIcon2,
  BootcampIcon3,
  BootcampIcon4
} from '../../svg.js'

const data = [
  {
    id: 0,
    icon: <BootcampIcon1 />,
    title: "80% tajriba va ko'nikma"
    //title: "80% experience and skill",
  },
  {
    id: 1,
    icon: <BootcampIcon2 />,
    title: 'Mentorlarimiz eng kamida 2 yil tajribaga ega'
    //title: "Our mentors have at least 2 years of programming experience",
  },
  {
    id: 2,
    icon: <BootcampIcon3 />,
    title: "Qulay dam olish"
    //title: "A training program based on the creation of current projects",
  },
  {
    id: 3,
    icon: <BootcampIcon4 />,
    title: "Koproq malumot"
    //title: "At the end of the course you will create your own IT project",
  }
]

function Bootcamp() {
  return (
    <div className={styles.bootcamp}>
      <Container className='container'>
        <h2 className={styles.bootcamp_title}>
          Bizning Sayohat Rejamiz va maqsatimiz
        </h2>
        <div className={styles.bootcamp_content}>
          <div className={styles.bootcamp_context}>
            {data?.map((item) => (
              <div key={item?.id} className={styles.bootcamp_context_item}>
                <div className={styles.bootcamp_context_item_icon}>
                  {item?.icon}
                </div>
                <p>{item?.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.bootcamp_info_img}>
            <Image src={BootcampImg} alt='' layout='fill' objectFit='cover' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Bootcamp
