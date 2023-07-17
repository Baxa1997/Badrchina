import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

import styles from './Footer.module.scss'
import Logo from '../../../../public/images/Logo.png'
import {
  InstagramIcon,
  FacebookIcon,
  TelegramIcon,
  YouTubeIcon
} from '../../svg.js'
import Whatsup from '../../../../public/images/whatsapp-svgrepo-com.svg'
import { useRouter } from 'next/router'

export function Footer() {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <div
      className={styles.footer}
      style={{
        borderTop:
          router.query.id === 'foundation' && '1px solid rgba(0, 0, 0, 0.12)'
      }}
    >
      <Container className='container'>
        <div className={styles.footer_top}>
          {/* <div className={styles.footer_logo}>
            <Link href='/'>
              <a>
              <span className={styles.logoFirst}>BADR</span> <span className={styles.logoSecond}>CHINA</span>
              </a>
            </Link>
          </div> */}
          <div className={styles.footer_links}>
            <Link href='/services'>
              <a>
               Biz Haqimizda
                {/* All courses */}
              </a>
            </Link>
            <Link href='/#courses'>
              <a>
                Shaharlar
                {/* Feedbacks */}
              </a>
            </Link>
          </div>
          <div className={styles.footer_socials}>
            <a className={styles.socialIcons} href='https://instagram.com/mhisrgsii?igshid=MzNlNGNkZWQ4Mg=='>
              <InstagramIcon />
            </a>
            <a className={styles.socialIcons} href='https://www.facebook.com/profile.php?id=100093916926996&mibextid=ZbWKwL'>
              <FacebookIcon />
            </a>
            <a className={styles.socialIcons} href='https://t.me/badrchina'>
              <TelegramIcon />
            </a>
            <a className={styles.socialIcons} href='https://youtube.com/@badrchina'>
              <YouTubeIcon />
            </a>
            <a href=''>
              {/* <YouTubeIcon /> */}
            </a>
          </div>
          <div className={styles.footer_contacts_container}>
            <div className={styles.footer_contacts_item}>
              <h4>+998 93 577 50 45</h4>
              <h4>+998 99 650 27 98</h4>
              <p>Contacts</p>
            </div>
            <div className={styles.footer_contacts_item}>
              <h4>Mirzo Ulugbek tumani,Feruza 2 massiv</h4>
              <p>Address</p>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p className={styles.footer_copyright}>
            {/* © Uacademy 2021 - 2022 Barcha huquqlar himoyalangan */}©
            BadrChina 2023 - 2025 All rights reserved
          </p>
          {/* <p className={styles.footer__brand}>
            <a href='https://udevs.io/'>by Udevs</a>
          </p> */}
        </div>
      </Container>
    </div>
  )
}
