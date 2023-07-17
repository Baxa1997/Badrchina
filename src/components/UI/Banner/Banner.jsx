import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Box } from '@mui/material'

import styles from './banner.module.scss'
import BannerBg from '../../../../public/images/banner_bg.png'
import BannerImage from '../../../../public/images/banner_image.webp'
import BannerImage2 from '../../../../public/images/new Banner.jpeg'
import BannerImage3 from '../../../../public/images/second banner.jpeg'

function Banner() {
  return (
    <div className={styles.banner}>
      <Container className='container'>
        <div className={styles.banner_content}>
          <div className={styles.banner_text}>
              <span>BADR CHINA</span>
              <p>Travel Agency Company</p>
          </div>
        <div className={styles.bannerImages}>
        <div className={styles.banner_img1}>
            <Image src={BannerImage2} alt='' />
          </div>
        {/* <div className={styles.banner_img2}>
            <Image src={BannerImage3} alt='' />
          </div> */}
        </div>
        </div>
      </Container>
      <Image
        src={BannerBg}
        objectFit='cover'
        priority={true}
        alt='cspace'
        layout='fill'
      />
    </div>
  )
}

export default Banner
