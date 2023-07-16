import React from 'react'
import { Container } from '@mui/material'

import styles from './numbers.module.scss'

const data = [

  {
    id: 1,
    number: '200',
    subtitle: 'dan ortiq mamnun sayohatchilar '
  },
  {
    id: 2,
    number: '10',
    subtitle: 'dan ortiq yangi shaharlar'
  },
  {
    id: 3,
    number: '2',
    subtitle: 'yangi paketlar'
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
