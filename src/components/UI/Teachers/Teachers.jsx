import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Container } from '@mui/material'

import styles from './teachers.module.scss'
import { ArrowPrevIcon, ArrowNextIcon } from '../../svg.js'

function Teachers({ teachers }) {
  const [subtitleOpen, setSubtitleOpen] = useState(false)

  const settings = {
    fade: true,
    dots: teachers?.length > 1 ? true : false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
    arrows: false
  }

  const slider = useRef()

  const previous = () => {
    slider.current.slickPrev()
  }

  const next = () => {
    slider.current.slickNext()
  }

  return (
    <div className={styles.teachers}>
      <Container className='container'>
        <Slider {...settings} ref={slider} className='teachers_slider'>
          {teachers?.map((item) => (
            <div key={item?.id} className={styles.teachers_content}>
              <div className={styles.teachers_left}>
                <h2>
                  Bizning mentorlarimiz
                  {/* Our mentors */}
                </h2>
                <h3 className={styles.teachers_projects_title}>
                  Muvaffaqiyatli loyihalar:
                  {/* Successful projects: */}
                </h3>
                <div
                  className={`${styles.teachers_projects_container} ${
                    (item?.projects.length === 4 ||
                      item?.projects.length === 3) &&
                    styles.active_two_columns
                  }`}
                >
                  {item?.projects.map((project) => (
                    <div key={project.id}>
                      <img src={project.img} alt='' />
                    </div>
                  ))}
                </div>
                <h4 className={styles.teachers_name}>{item.name}</h4>
                <p className={styles.teachers_info}>{item.title}</p>
              </div>
              <div className={styles.teachers_right}>
                {teachers?.length > 1 && (
                  <div className={styles.teachers_right_btns}>
                    <button
                      onClick={previous}
                      className={styles.teachers_right_btns_pre}
                    >
                      <ArrowPrevIcon />
                    </button>
                    <button
                      onClick={next}
                      className={styles.teachers_right_btns_next}
                    >
                      <ArrowNextIcon />
                    </button>
                  </div>
                )}
                <div className={styles.teachers_right_img}>
                  <img src={item?.img} alt='' />
                </div>
              </div>
              <div
                className={`${styles.teachers_context} ${
                  teachers?.length === 1 && styles.active
                }`}
              >
                <h4 className={styles.teachers_name}>{item?.name}</h4>
                <p className={styles.teachers_info}>
                  {subtitleOpen
                    ? item?.subtitle
                    : item?.subtitle.substring(0, 50)}{' '}
                  <span
                    onClick={() => setSubtitleOpen((prevState) => !prevState)}
                  >
                    {subtitleOpen ? 'close' : 'see all'}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default Teachers
