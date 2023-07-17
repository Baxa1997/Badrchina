import React, { useState } from 'react';
import styles from '../gallery.module.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import gallerImg1 from '../../../../../public/images/khiva1.jpg';
import gallerImg2 from '../../../../../public/images/khiva1.jpg';
import gallerImg3 from '../../../../../public/images/khiva1.jpg';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const useStyles = makeStyles({
    root: { 
        width: '400px',
        color: 'red',
        zIndex: '9999',
        postion: 'absolute',
        top: '30px'
    },
    photoIcon: {
        position: 'absolute',
        fontSize: '30px',
        top: '20px',
        left: '20px',
        color: '#fff !important',
        zIndex: 9,
        fill: '#ffff !important'
    }
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 505,
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: '5px',
    borderRadius: '5px',
    zIndex: 99
  };
  

function GalleryImages(props) {
    const [open, setOpen] = useState(false)
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const classes = useStyles();
    
    return (
        <div className={styles.gallery_Images}>
            <div className={styles.gallery_Images_item}>
                <Button onClick={handleOpen} style={{ background: 'none', padding: 0, overflow: 'hidden'}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg1}
                    alt=''
                    />
                    </div>
                    
                </Button>
                <Button onClick={handleOpen} style={{ background: 'none', padding: 0,}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg2}
                    alt=''
                    />
                    </div>
                </Button>
                <Button onClick={handleOpen} style={{ background: 'none', padding: 0}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg3}
                    alt=''
                    />
                    </div>
                </Button>
                {/* <Button onClick={handleOpen} style={{ background: 'none', padding: 0}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg4}
                    alt=''
                    />
                    </div>
                </Button> */}
                {/* <Button onClick={handleOpen} style={{ background: 'none', padding: 0}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg5}
                    alt=''
                    />
                    </div>
                </Button>
                <Button onClick={handleOpen} style={{ background: 'none', padding: 0}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg6}
                    alt=''
                    />
                    </div>
                </Button>
                <Button onClick={handleOpen} style={{ background: 'none', padding: 0}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg7}
                    alt=''
                    />
                    </div>
                </Button>
                <Button onClick={handleOpen} style={{ background: 'none', padding: 0}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg8}
                    alt=''
                    />
                    </div>
                </Button>
                <Button onClick={handleOpen} style={{ background: 'none', padding: 0}}>
                    <div className={styles.gallery_Img}>
                    <CameraAltIcon className={ classes.photoIcon }/>
                    <Image
                    src={gallerImg9}
                    alt=''
                    />
                    </div>
                </Button> */}
                
                
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                   <Image
                   src={gallerImg2}
                   alt=''
                   width={753}
                   height={505}
                   />
                </Box>
                </Modal>
            </div>
        </div>
    );
}

export default GalleryImages;
