import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, Box, Button, Dialog } from '@mui/material'
import styles from './single.module.scss'
import { CloseIcon } from '../../../svg.js'
import axios from 'axios'
import { useRouter } from 'next/router'
import Succes from 'components/UI/Modal/Succes'
import Modal from '../../Modal/Modal'

function SingleBanner({ bannerInfo }) {
  const [success, setSuccess] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const router = useRouter()

  const major = router.query.id === undefined || '' ? 'Home' : router.query.id
  const handleClick = () => setSuccess(true)
  const handleCloseSuccess = () => setSuccess(false)

  // const front = value.find((item) => item.id === 2)
  // const backend = value.find((item) => item.id === 3)
  // const qa = value.find((item) => item.id === 4)
  // const android = value.find((item) => item.id === 5)
  // const devops = value.find((item) => item.id === 6)
  // const design = value.find((item) => item.id === 1)

  // const data =
  //    router.query.id === 'Frontend-Developer' ? value[0].attributes
  //  : router.query.id === 'Backend-Developer' ? 'backend'
  //  : router.query.id === 'QA' ? 'qa'
  //  : router.query.id === 'Android-IOS-Developer' ? 'android'
  //  : router.query.id === 'Devops' ? 'devops'
  //  : router.query.id === 'Design' ? 'design'
  //  : null

  // console.log(router.query.id === 'Frontend-Developer' ? 'done' : null)
  // console.log('data =====>', data)

  // router.query.id.includes("Frontend") && value ? value[0]?.attributes.title : ""
  return (
    <>
      <div className={styles.singleBanner}>
        <Container className='container'>
          <div className={styles.banner_wrapper}>
            <Box>
              <h1 className={styles.banner_title}>{bannerInfo?.title}</h1>
              <p className={styles.banner_subtitle}>{bannerInfo?.subtitle}</p>
              <Button onClick={handleOpen} className={styles.banner_btn}>
                Ariza qoldirish
                {/* Submit an application */}
              </Button>
            </Box>
            <Box>
              {bannerInfo?.bannerImage && (
                <Image
                  src={bannerInfo?.bannerImage}
                  alt=''
                  width={650}
                  height={400}
                />
              )}
            </Box>
          </div>

          <Modal
            open={open}
            handleClose={() => setOpen(false)}
            chooseCourse={false}
          />
        </Container>

        {bannerInfo?.bannerBg && (
          <Image
            src={bannerInfo?.bannerBg}
            priority={true}
            alt='cspace'
            layout='fill'
          />
        )}
      </div>
      <Succes open={success} close={() => handleCloseSuccess(false)} />
    </>
  )
}

export default SingleBanner
