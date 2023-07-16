import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'

import styles from './process.module.scss'
import ProcessDesktopImg from '../../../../public/images/process.svg'
import ProcessMobileImg from '../../../../public/images/process_mobile.png'

function Process() {
  return (
    <div className={styles.process}>
      <Container>
        <h2 className={styles.process_title}>
          Darslarimiz qanday o'tiladi
          {/* How our lessons are taught */}
        </h2>
        <div className={styles.process_content}>
          <div className={styles.process_content_process_desktop}>
            <Image src={ProcessDesktopImg} alt='' />
          </div>
          <div className={styles.process_content_process_mobile}>
            <Image src={ProcessMobileImg} alt='' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Process
