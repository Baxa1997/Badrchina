import React from 'react'
import SingleBanner from 'components/UI/Banner/SingleBanner/SingleBanner'
import StepInfo from 'components/UI/StepInfo/StepInfo'
import Blog from '../../UI/Blog/Blog'
import Teachers from 'components/UI/Teachers/Teachers'
import Process from 'components/UI/Process/Process'
import Advantages from 'components/UI/Advantages/Advantages'
import StudyPlan from 'components/UI/StudyPlan/StudyPlan'
import Certificate from 'components/UI/Certificate/Certificate'
import Employers from 'components/UI/Employers/Employers'
import Feedback from 'components/UI/Feedback/Feedback'
import Form from 'components/UI/Form/Form'
import Question from 'components/UI/Question/Question'
import styles from './single.module.scss'
import { useRouter } from 'next/router'
import Foundation from 'components/UI/Foundation/Foundation'
import Gallery from '../Gallery/Gallery'
import GalleryKhiva from '../GalleryKhiva/GalleryKhiva'
import GallerySamar from '../GallerySamar/GallerySamar'
import GalleryBukhara from '../GalleryBukhara/GalleryBukhara'
import Services from '../Services/Services'

function Single({ major }) {
  const router = useRouter()
  console.log('majormajor', router);

  return (
    // <div className={styles.single}>
    //   <SingleBanner bannerInfo={major?.banner} />
    //   <StepInfo stepInfo={major?.stepInfo} />
    //   <Blog blog={major?.blog} />
    //   <Teachers teachers={major?.teachers} />
    //   <Process />
    //   <Advantages />
    //   <StudyPlan
    //     program={major?.program}
    //     noAccordion={major?.slug === 'devops'}
    //   />
    //   {/* {router.query.id !== 'foundation' && (
    //     <Certificate certificate={major?.certificate} />
    //   )}
    //   {router.query.id !== 'foundation' && <Employers />}
    //   {router.query.id === 'foundation' && <Foundation />} */}
    //   <div className={styles.feedback}>
    //     <Feedback feedbackData={major?.feedbacks} />
    //   </div>
    //   <Form
    //     title={"Soha egasi bo'lishni xohlayman"}
    //     subtitle={
    //       'Guruhga qoshiling va eng qisqa muddatda IT da soha egasiga aylaning'
    //     }
    //     singleFormClass={true}
    //   />
    //   {/* {router.query.id !== 'foundation' && (
    //     <Question question={major?.questions} />
    //   )} */}
    // </div>
    
    <>
     {router.query.id === 'tashkent' && <Gallery />}
     {router.query.id === 'khiva' && <GalleryKhiva />}
     {router.query.id === 'samarqand' && <GallerySamar />}
     {router.query.id === 'bukhara' && <GalleryBukhara />}
     {router.query.id === 'services' && <Services />}
      
    </>
  )
}

export default Single

// title={"Soha egasi bo'lishni xohlayman"}
// subtitle={"Guruhga qoshiling va eng qisqa muddatda IT da soha egasiga aylaning"}
