import Image from 'next/image'
import styles from './Main.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import Banner from '../Banner/Banner'
import Features from '../Features/Features'
import Courses from '../Courses/Courses'
import Numbers from '../Numbers/Numbers'
import Bootcamp from '../Bootcamp/Bootcamp'
import Feedback from '../Feedback/Feedback'
import Form from '../Form/Form'

const feedbackData = [
  {
    id: 0,
    img: '/images/feedback_zokirov_kamolliddin.png',
    name: 'Kamolliddin Zokirov',
    video: 'https://www.youtube.com/embed/eewW_1GMQDw'
  },
  {
    id: 1,
    img: '/images/feedback_ilyosbek.png',
    name: 'Ilyosbek',
    video: 'https://www.youtube.com/embed/EqPcX8Goxic'
  },
  {
    id: 2,
    img: '/images/feedback_tolib.png',
    name: 'Tolib',
    video: 'https://www.youtube.com/embed/yHRHU4Nx7uc'
  },
  {
    id: 3,
    img: '/images/feedback_arabbek_ilhomov.png',
    name: 'Arabbek Ilhomov',
    video: 'https://www.youtube.com/embed/cdYj6y4SMxk'
  },
  {
    id: 4,
    img: '/images/feedback_abror_azizov.png',
    name: 'Abror Azizov',
    video: 'https://www.youtube.com/embed/AxkXS2LFuKQ'
  }
]

export function Main({ data }) {
  const { t } = useTranslation('common')

  const [posts, setPosts] = useState([])

  // useEffect(() => {
  // getPosts({ limit: 10, page: 1 }).then((res) => {
  //   setPosts(res)
  // })
  // }, []);

  const addPost = () => {
    createPost(
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    ).then((res) => {
      console.log('create')
    })
  }

  return (
    <main className={styles.main}>
      <Banner />
      <Features />
      <Courses courses={data} />
      <Numbers />
      <Bootcamp />
      {/* <Feedback feedbackData={feedbackData} /> */}
      <Form
        title={"O'zingizgiz nima tanlashni bilmayapsizmi?"}
        subtitle={
          "Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta qo'ng'iroq qilishadi."
        }
      />
    </main>
  )
}

// title={"Yo'nalishni tanlay olmayapsizmi?"}
// subtitle={"Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta qo'ng'iroq qilishadi."}
