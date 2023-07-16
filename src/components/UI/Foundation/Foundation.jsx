import { Container } from '@mui/material'
import React from 'react'
import styles from './foundation.module.scss'
import Image from 'next/image'

function Foundation() {
  return (
    <Container className='container'>
      <div className={styles.blog}>
        <p className={styles.title}>
          Foundation imtihonidan so’ng kurs tanlash imkoniyati
        </p>
        <div className={styles.img}>
          <img src='/images/foundation.png' alt='' />
        </div>
      </div>
    </Container>
  )
}

export default Foundation
