import React from 'react';
import styles from './gallery.module.scss';
import Container from '@mui/material/Container';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { makeStyles } from '@mui/styles';
import GalleryImages from './GalleryImageContent/GalleryImages';


const useStyles = makeStyles({
    root: {
        width: '10px !important',
        height: '12px !important',
        marginLeft: '2px !important',
        color: '#ccc !important'
    }
})

function GalleryKhiva(props) {
    
    const classes = useStyles();
    
    return (
        <div className={styles.gallery}>
                <div className={styles.gallery_section}>
                <ul className={styles.breadCrumb}>
                   <li className={styles.breadCrumb_item}>
                       <a href="\" className={styles.breadCrumb_link}>
                           Home
                       </a>
                     </li> 
                     <span className={styles.arrowCircle}>
                     <ArrowForwardIosOutlinedIcon className={classes.root}/>
                     </span>
                   <li className={styles.breadCrumb_currentItem}>
                        Gallery
                     </li> 
                 </ul>
                 
                 <div className={styles.gallery_Images_section}>
                     <GalleryImages/>   
                </div> 
                </div>
        </div>
    );
}

export default GalleryKhiva;
