import React from 'react'

import './SectionProfession.scss'
import { Title } from '../Title/Title'

export const SectionProfession = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'ВЫ ПОЛУЧИТЕ ДВЕ ПРОФЕССИИ В ОДНОМ КУРСЕ'} line={true} />
            <div className='sectionTextParagraph'>
                <p>Это уникальное предложение, повышающее вашу конкурентоспособность в десятки раз.</p>
                <p>Вы получаете сразу две профессии: массажиста и СПА-мастера</p>
            </div>
        </section>
    )
}
