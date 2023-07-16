import React from 'react'
import Image from 'next/image'
import styles from './employers.module.scss'
import { Container } from '@mui/material'

import employerimg from '../../../../public/images/employer1.png'
import employerimg2 from '../../../../public/images/employer2.png'
import employerimg3 from '../../../../public/images/employer3.png'
import employerimg4 from '../../../../public/images/employer4.png'
import employerimg5 from '../../../../public/images/employer6.png'

function Employers(props) {
  return (
    <div className={styles.employers}>
      <Container className='container'>
        <h2 className={styles.employers_title}>
          Sizga ish berishga tayyor kompaniyalar
          {/* Companies ready to hire you */}
        </h2>
        <div className={styles.employers_container}>
          <div className={styles.employers_content}>
            <div className={styles.employers_content_item}>
              <Image src={employerimg} alt='' width={124} height={39} />
            </div>
            <div className={styles.employers_content_item}>
              <Image src={employerimg2} alt='' width={56} height={56} />
            </div>
            <div className={styles.employers_content_item}>
              <Image src={employerimg3} alt='' width={86} height={49} />
            </div>
            <div className={styles.employers_content_item}>
              <Image src={employerimg4} alt='' width={175} height={30} />
            </div>
            <div className={styles.employers_content_item}>
              <Image src={employerimg5} alt='' width={175} height={41} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Employers
