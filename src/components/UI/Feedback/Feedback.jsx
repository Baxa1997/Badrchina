import { Container } from '@mui/material'
import React, { useState, useRef } from 'react'
import styles from './feedback.module.scss'
import { Button, Dialog } from '@mui/material'
import { PlayIcon, CloseIcon, ArrowPrevIcon, ArrowNextIcon } from '../../svg.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'

const data = [
  {
    id: 0,
    img: '/images/feedback_abror_azizov.png',
    name: 'Abror',
    video: 'https://www.youtube.com/embed/AxkXS2LFuKQ'
  },
  {
    id: 1,
    img: '/images/feedback_ilyosbek.png',
    name: 'Ilyosbek',
    video: 'https://www.youtube.com/embed/EqPcX8Goxic'
  },
  // {
  //   id: 2,
  //   img: '/images/feedback_diyor_shoumarov.png',
  //   name: 'Diyor',
  //   video: 'https://www.youtube.com/embed/bGnBaOHj0V0'
  // },
  {
    id: 3,
    img: '/images/feedback_behruz_abdumalikov.png',
    name: 'Behruz',
    video: 'https://www.youtube.com/embed/uolsGE_tlus'
  },
  {
    id: 4,
    img: '/images/feedback_tolib.png',
    name: 'Tolib',
    video: 'https://www.youtube.com/embed/yHRHU4Nx7uc'
  },
  {
    id: 5,
    img: '/images/feedback_zokirov_kamolliddin.png',
    name: 'Kamolliddin',
    video: 'https://www.youtube.com/embed/eewW_1GMQDw'
  },
  {
    id: 6,
    img: '/images/feedback_arabbek_ilhomov.png',
    name: 'Ilhombek',
    video: 'https://www.youtube.com/embed/cdYj6y4SMxk'
  },

  {
    id: 7,
    img: '/images/feedback_ravshan.png',
    name: 'Ravshan',
    video: 'https://www.youtube.com/embed/XbkPYysMerA'
  },
  {
    id: 8,
    img: '/images/feedback_muhammadrasul.png',
    name: 'Muhammad Rasul',
    video: 'https://www.youtube.com/embed/BeiDAKOoH3s'
  }
]

function Graduates({ feedbackData }) {
  const [open, setOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState(null)

  const swiperRef = useRef(null)

  const handleClick = (url) => {
    setOpen(true)
    setVideoUrl(url)
  }
  const handleClose = () => setOpen(false)

  const params = {
    slidesPerView: 1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    pagination: {
      clickable: true
    },
    loop: true,
    modules: [Pagination],
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 2
      },
      900: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      }
    }
  }

  return (
    <div className={styles.graduates} id='feedback'>
      <Container className='container'>
        <h2 className='title'>
          Bootcamp bitiruvchilari
          {/* Bootcamp graduates */}
        </h2>
        <div className={styles.graduates_content}>
          <Swiper {...params} ref={swiperRef}>
            {data?.map((item) => (
              <SwiperSlide
                key={item?.id}
                className={styles.graduates_content_item}
                onClick={() => handleClick(item?.video)}
              >
                <div className={styles.graduates_content_img}>
                  <img src={item?.img} alt='' />
                </div>

                <div className={styles.graduates_control_panel}>
                  <Button
                    onClick={handleClick}
                    className={styles.graduates_play_btn}
                  >
                    <span>
                      <PlayIcon />
                      {/* Videoni ko'rish */}
                      Watch video
                    </span>
                  </Button>
                  <h3>{item?.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`${styles.swiper_btns} ${styles.prev}`}
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            {' '}
            <ArrowPrevIcon />
          </div>
          <div
            className={`${styles.swiper_btns} ${styles.next}`}
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ArrowNextIcon />
          </div>
        </div>
        <Dialog open={open} onClose={handleClose} id='feedback_dialog'>
          {/* <button onClick={handleClose} className={styles.close_icon}>
            <CloseIcon />
          </button> */}
          <div className={styles.feedback_dialog}>
            <iframe
              width='100%'
              height='100%'
              className={styles.iframe}
              src={videoUrl}
              frame-border='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </Dialog>
      </Container>
    </div>
  )
}

export default Graduates
