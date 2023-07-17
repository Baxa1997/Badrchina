import React, {useState} from 'react';
import styles from '../gallery.module.scss'
import Image from 'next/image'
import galleryImg1 from '../../../../../public/images/gallery img.png'
import { CalendarIcon2, CancelIcon } from '../../../svg.js'
import Slider from 'react-slick'
import { Dialog } from '@mui/material'


const data = [
    "/images/coaches_img1.png",
    "/images/coaches_img1.png",
    "/images/coaches_img1.png"
]



function GalleryList({ img, date, title, status }) {
    const [openGallery, setOpenGallery] = useState(false)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: `slick-gallery ${styles.dots_gallery}`,
    }
    
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: `slick-dots ${styles.dots}`,
        arrows: false
      }
    
    // Dialog
    const handleOpen = () => setOpenGallery(true)
    const handleClose = () => setOpenGallery(false)
    
    return (
        <>
            <div className={styles.galleryList} id='gallery_list' onClick={handleOpen}>
                <div className={ status === false ? styles.galleryList_item : styles.galleryList_item_new } >
                    <Image
                    src={img}
                    alt=''
                    layout='fill'
                    srl_gallery_image="true"
                    />
                    <div className={styles.gallery_context}>
                    <div className={styles.gallery_date}>
                    <CalendarIcon2/> 
                    <span>{date}</span>
                    </div>
                    <h4 className={styles.gallery_title}>
                        {title}   
                    </h4>
                    </div>
                </div>
            </div>
            
            
                <Dialog maxWidth onClose={handleClose} open={openGallery} PaperProps={{
                style: {backgroundColor: "rgba(37, 44, 50, 0.01)", boxShadow: 'none'}}} 
                BackdropProps={{ style: {backgroundColor: 'rgba(37, 44, 50, 0.9)' }}}
                className={styles.dialog}
                >
                    <div className={styles.control_cancelBtn}><button onClick={handleClose} className={styles.dialog_closeIcon}><CancelIcon/></button></div>
                    <Slider {...settings} className='dialog_slider'>
                        <div className={styles.dialog_images}>
                            <div className={styles.dialog_img}>
                            <Image
                            src={galleryImg1}
                            alt=''
                            width={823}
                            height={400}
                            objectFit="cover"
                            />
                            </div>
{/*                                
                            <div className={styles.dialog_img_context}>
                                <div className={styles.dialog_img_date}>
                                    <CalendarIcon2/>
                                    <span>06.09.2022</span>
                                </div>
                                <h4>Чемпионат в Венгрии - Роман Ветров</h4>
                            </div> */}
                        </div>
                        <div className={styles.dialog_images}>
                                <div className={styles.dialog_img}>
                                <Image
                                src={galleryImg1}
                                alt=''
                                width={823}
                                height={400}
                                objectFit="cover"
                                />
                                </div>
                               
                            {/* <div className={styles.dialog_img_context}>
                                <div className={styles.dialog_img_date}>
                                    <CalendarIcon2/>
                                    <span>06.09.2022</span>
                                </div>
                                <h4>Чемпионат в Венгрии - Роман Ветров</h4>
                            </div> */}
                        </div>

                    </Slider>
                </Dialog>
                
                {/* Mobile Gallery modal */}
                    
                <Dialog maxWidth onClose={handleClose} open={openGallery} PaperProps={{
                style: {backgroundColor: "rgba(0, 0, 0, 0.96)", boxShadow: 'none'}}} 
                BackdropProps={{ style: {backgroundColor: 'rgba(0, 0, 0, 0.96);' }}}
                className={styles.mobile_dialog} id='mobile_dialog'
                >
                    <div className={styles.mobile_control_cancelBtn}><button onClick={handleClose} className={styles.mobile_dialog_closeIcon}><CancelIcon/></button></div>
                    <Slider {...settings2} className='mobile_dialog_slider'>
                        <div className={styles.mobile_dialog_images}>
                            <div className={styles.mobile_dialog_img}>
                            <Image
                            src={galleryImg1}
                            alt=''
                            // width='100%'
                            // height='100%'
                            />
                            </div>
                        </div>
                        <div className={styles.mobile_dialog_images}>
                            <div className={styles.mobile_dialog_img}>
                            <Image
                            src={galleryImg1}
                            alt=''
                            // width='100%'
                            // height='100%'
                            />
                            </div>
                        </div>
                        <div className={styles.mobile_dialog_images}>
                            <div className={styles.mobile_dialog_img}>
                            <Image
                            src={galleryImg1}
                            alt=''
                            // width='100%'
                            // height='100%'
                            />
                            </div>
                        </div>
                    </Slider>
                    {/* <div className={styles.mobile_dialogImg_context}>
                                <div className={styles.mobile_dialogImg_date}>
                                    <CalendarIcon2/>
                                    <span>06.09.2022</span>
                                </div>
                                <h4>Чемпионат в Венгрии - Роман Ветров</h4>
                        </div> */}
                    
                </Dialog>
            
        </>
    );
}

export default GalleryList;