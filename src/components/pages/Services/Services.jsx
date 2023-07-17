import React from 'react';
import styles from './styles.module.scss'
import Image from 'next/image';

function Services(props) {
    return (
        <div className={styles.services}>
           <h2>Biz Haqimizda</h2>
           
           <div className={styles.services_content}>
            <span>Bizning xizmatlar:</span> <p>Uzbekistan-Saudiya  ,Uzbekistan- Hitoyga charter reyslar amalga oshirish,saudiya va hitoyga viza ishlarini  oshirish,saudiya va hitoydagi katta kompaniyar,ishlab chiqaruvchi zavodlar va fabrikalar,saudiya va hitoy savdo palatasi bilan uchrashuvlar tashkillashtirish.
                
                <p>Adress: mirzo ulugbek tumani</p>
            </p>
           </div>
           
           {/* <Image src={'/images/travel.webp'} width={200} height={200} alt=''  /> */}
        </div>
    );
}

export default Services;