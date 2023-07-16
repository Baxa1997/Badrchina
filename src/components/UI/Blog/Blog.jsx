import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'

import styles from './Blog.module.scss'

function CourseFor({ blog }) {
  return (
    <div className={styles.blog}>
      <Container className='container'>
        <h2 className={styles.blog_title}>
          Kursimiz kimlarga to'g'ri keladi
          {/* Who is our course for? */}
        </h2>
        <div className={styles.blog_content}>
          {blog?.map((blog) => (
            <div key={blog?.id} className={styles.blog_content_item}>
              <div className={styles.blog_content_img}>
                <Image
                  src={blog?.icon}
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <h4>{blog?.title}</h4>
              <p>{blog?.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default CourseFor
