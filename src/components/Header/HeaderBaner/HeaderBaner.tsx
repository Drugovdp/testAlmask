import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import baner1 from '../../../images/baner1.jpg'
import baner2 from '../../../images/baner2.jpg'
import baner3 from '../../../images/baner3.jpg'

import s from './HeaderBaner.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const HeaderBaner = () => {
    return (
        <div className={s.headerBaner}>
            <div className={s.titleBox}>
                <div className={s.title}>ПРОФЕССИОНАЛЬНЫЕ КУРСЫ МАССАЖА</div>
                <div className={s.logoType}>ALMASK</div>
                <div className={s.line}></div>
                <div className={s.description}>Профессиональное обучение массажу для всех желающих.<br></br>
                    Запишитесь прямо сейчас – и обучайтесь у лучших тренеров!</div>
                <button className={s.btn}>Записаться сейчас</button>
            </div>
            <div className={s.gradient}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide style={{ filter: 'blur(1px)' }}><img src={baner1} alt="" /></SwiperSlide>
                    <SwiperSlide style={{ filter: 'blur(1px)' }}><img src={baner2} alt="" /></SwiperSlide>
                    <SwiperSlide style={{ filter: 'blur(1px)' }}><img src={baner3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
