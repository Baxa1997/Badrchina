import { Container } from '@mui/material'
import React from 'react'
import styles from './advantages.module.scss'
import { AdvantageIcon1, AdvantageIcon2, AdvantageIcon3 } from '../../svg.js'
import advantages from '../../../../public/images/advantage_img.png'
import layer from '../../../../public/images/advantages_layer.png'
import Image from 'next/image'

const data = [
  {
    id: 0,
    title: '80% amaliy darslar',
    //title: "80% practical lessons",
    img: <AdvantageIcon1 />
  },
  {
    id: 1,
    title: "IT kompaniyalarda ishlovchi tajribali o'qituvchilar",
    //title: "Experienced teachers working in IT companies",
    img: <AdvantageIcon2 />
  },
  {
    id: 2,
    title: "Zamonaviy texnologiyalarga asoslangan o'quv dasturi",
    //title: "Curriculum based on modern technologies",
    img: <AdvantageIcon3 />
  }
]

function Advantages(props) {
  return (
    <div className={styles.advantages}>
      <Container className='container'>
        <div className={styles.advantages_content}>
          <div className={styles.advantages_content_item}>
            <div className={styles.advantages_text}>
              <h2>
                Bizning afzalliklarimiz
                {/* Our advantages */}
              </h2>
              <div className={styles.advantages_img_mobile}>
                <Image src={advantages} alt='' />
              </div>
              <p>
                Biz bilan IT sohasida bilimga ega bo'lishingiz shart emas. O'quv
                dasturlarimiz 0 dan o'rganishga mo'ljallangan. Sizga soha
                egasiga aylanishingiz uchun Ingliz tilida Pre Intermidieate
                darajasi yetarli.
                {/* You do not need to have IT knowledge with us. Our study programs
                are designed to learn from 0. All you need is Pre-intermediate
                English level and desire to start learning this profession. */}
              </p>
            </div>

            <div className={styles.advantages_context}>
              {data?.map((item) => (
                <div key={item?.id} className={styles.advantages_context_item}>
                  <div className={styles.advantages_context_info}>
                    <div className={styles.advantages_context_icon}>
                      {item?.img}
                    </div>
                    <p>{item?.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.advantages_img}>
          <Image src={advantages} alt='' />
        </div>
        <div className={styles.layer_img}>
          <Image src={layer} alt='' />
        </div>
      </Container>
    </div>
  )
}

export default Advantages
