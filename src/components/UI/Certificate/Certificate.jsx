import { Container } from '@mui/material'
import React from 'react'
import styles from './certificate.module.scss'
import Image from 'next/image'

function Certificate({ certificate }) {
  return (
    <div className={styles.certificate}>
      <Container className="container">
        <div className={styles.certificate_content}>
          <div className={styles.certificate_context}>
            <h2>
              Kursni tugatgandan so'ng sertifikat
              {/* Certificate after completing the course */}
            </h2>
            <p>
              Siz o'zingizning "portfolio"ngizga qo'shishingiz va ish beruvchiga
              ko'rsatishingiz mumkin bo'lgan sertifikatini olasiz.
              {/* You will get a Certificate of completion, which you can add to
              your portfolio and show it to your future employer. */}
            </p>
          </div>
          <div className={styles.certificate_img}>
            <img src={certificate} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Certificate
