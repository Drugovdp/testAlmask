import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import baner1 from '../../../images/baner1.jpg'
import baner2 from '../../../images/baner2.jpg'
import baner3 from '../../../images/baner3.jpg'

import './HeaderBaner.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Button } from '../../Button/Button'

type TypePropsHeaderBaner = {
    clossedPopup: boolean
    setClossedPopup: (clossedPopup: boolean) => void
}

export const HeaderBaner: React.FC<TypePropsHeaderBaner> = ({clossedPopup, setClossedPopup}) => {

    const handlerClossed = () => {
        setClossedPopup(false)
    }
    return (
        <div className='headerBaner'>
            <div className='titleBox'>
                <div className='title'>АЛМАСК - Академия Массажа, СПА и Психологии</div>
                <div className='logoType'>ALMASK</div>
                <div className='line'></div>
                <div className='description'>Получите две профессии в одном курсе<br></br> МАССАЖ и СПА
                    От Академии с лицензией РФ<br></br>
                    Курс с нуля и для мастеров со стажем</div>
                <Button callBack={handlerClossed}>Записаться сейчас</Button>
            </div>
            <div className='gradient'>
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
