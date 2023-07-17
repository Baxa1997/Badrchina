import React from 'react'
import { useRouter } from 'next/router'
import { Button, Container } from '@mui/material'

import styles from './courses.module.scss'

const data = [
  {
    id: 0,
    img: '/images/Khiva.jpg',
    title: 'Tashkent',
    subtitle:
      "Tashkent",
    slug: 'tashkent'
  },
  {
    id: 1,
    img: '/images/Khiva.jpg',
    title: 'Khiva',
    subtitle:
      "Khiva",
    slug: 'khiva'
  },
  {
    id: 2,
    img: '/images/Samarqand.jpg',
    title: 'Samarqand',
    subtitle:
      "Samarqand",
    slug: 'samarqand'
  },
  {
    id: 3,
    img: '/images/Bukhara.jpg',
    title: 'Bukhara',
    subtitle:
      "Samarqand",
    slug: 'bukhara'
  },
]

function Courses() {
  const router = useRouter()

  const handleClick = (slug) => {
    router.push(`/${slug}`)
  }


  return (
    <div className={styles.courses} id='courses'>
      <Container className='container'>
        <h2 className='title'>
          Sayohat yo'nalishini tanlang
        </h2>
        <div className={styles.courses_content}>
          {data?.map((item) => (
            <div
              onClick={() => handleClick(item?.slug)}
              key={item?.id}
              className={styles.courses_content_item}
            >
              {/* <div className={styles.badge}>{item.term}</div> */}
              <div className={styles.courses_content_img}>
                <img src={item?.img} alt='' />
              </div>
              <div className={styles.courses_content_context}>
                <div>
                  <h4>{item?.title}</h4>
                  <p>{item?.subtitle}</p>
                </div>
                <Button disableRipple className={styles.register_btn}>
                  Batafsil ma'lumot
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Courses
