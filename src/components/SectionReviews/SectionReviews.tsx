import { useState } from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './SectionReviews.scss'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Title } from '../Title/Title'
import { reviews } from '../state/state'

export const SectionReviews = () => {

    const [stateReviews, setStateReviews] = useState(reviews)

    const itemReviews = stateReviews.map(el => {
        return (
            <SwiperSlide key={el.id}>
                <div className='itemReviews'>
                    <div className="itemReviewsImg">
                        <img src={el.img} alt="" />
                    </div>
                    <div className="itemReviewsTitle">
                        <h4>{el.name}</h4>
                    </div>
                    <div className="itemReviewsText">
                        <p>{el.description}</p>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <section className='sectionReviews'>
            <Title titleh2={'Отзывы'} span={'клиентов'} titleh4={'нашей компании'} textCentr={true} />
            <div className='subTitle'>
                <p>Что говорят наши клиенты о нашей работе</p>
            </div>
            <div className='contentReviews'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        628: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {itemReviews}
                </Swiper>
            </div>
        </section>
    )
}
