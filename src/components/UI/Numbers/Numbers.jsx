import React from 'react'
import { Container } from '@mui/material'

import styles from './numbers.module.scss'

const data = [

  {
    id: 1,
    number: '2000',
    subtitle: '2,000 dan oshiq sayyohlar qabul qilishni reja qilganmiz'
  },
  {
    id: 2,
    number: '10',
    subtitle: 'dan ortiq yangi yunalishlarni yulga quyamiz'
  },
  {
    id: 3,
    number: '2',
    subtitle: 'turlik paketlar'
  }
]

function Numbers() {
  return (
    <div className={styles.numbers} id='numbers'>
      <Container className='container'>
        <h2 className={styles.title}>
          Qiziqarli raqamlar
          {/* Interesting numbers */}
        </h2>
        <div className={styles.numbers_content}>
          {data?.map((item) => (
            <div key={item?.id} className={styles.numbers_content_item}>
              <h3>{item?.number}</h3>
              <p>{item?.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Numbers
