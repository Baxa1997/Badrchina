import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Button } from '@mui/material'

import Modal from '../../Modal/Modal'
import styles from '../Header.module.scss'
import Logo from '../../../../../public/images/Logo.png'
import { PhoneIcon } from '../../../svg.js'

function Desktop() {
  const [value, setValue] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    setValue(true)
  }

  return (
    <div className={styles.desktop_topbar}>
      <Container className='container'>
        <div className={styles.desktop_topbar_content}>
          <Link href='/'>
            <a className={styles.desktop_logo}>
              <span className={styles.logoFirst}>BADR</span>  <span className={styles.logoSecond}>CHINA</span>
            </a>
          </Link>
          
          <div className={styles.desktop_contact}>
            <Link href='/'>
                <a className={styles.desktop_contact_item}>Biz Haqimizda</a>
            </Link>
            <Link href='/'>
                <a className={styles.desktop_contact_item}>Afzalliklarimiz</a>
            </Link>
          </div>

          <div className={styles.contact_panel}>
            <a href='tel:+998 (93) 577-50-45'>
              <PhoneIcon />
              <span>+998 (93) 577-50-45</span>
            </a>

            <Button
              onClick={handleOpen}
              className={styles.register_btn}
              disableRipple
            >
              Ro’yxatdan o’tish
            </Button>
          </div>
        </div>
      </Container>

      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        chooseCourse={true}
      />
    </div>
  )
}

export default Desktop
