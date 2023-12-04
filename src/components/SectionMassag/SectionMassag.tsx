import React from 'react'

import './SectionMassag.scss'
import { Title } from '../Title/Title'

export const SectionMassag = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'МЫ СОВМЕЩАЕМ МАССАЖ и ПСИХОЛОГИЮ'} line={true} />
            <div className='sectionTextParagraph'>
                <p>Это еще одна наша уникальная особенность!</p>
                <p>Мы обучаем наших учеников основам психологии общения, создания постоянной клиентской базы, работе со сложными клиентами.</p>
                <p>Это позволяет  начинать работать и зарабатывать во время обучения</p>
            </div>
        </section>
    )
}
