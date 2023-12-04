import React from 'react'

import './SectionTeacher.scss'
import { Title } from '../Title/Title'

export const SectionTeacher = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'НАШИ ПРЕПОДАВАТЕЛИ'} line={true} />
            <div className='sectionTextParagraph'>
                <p>Мы берём только лучших преподавателей, с высшим образованием, врачей, имеющих большую теоретическую и практическую базу, умеющих просто доносить сложную информацию и индивидуально работать с каждым студентом</p>
            </div>
        </section>
    )
}
