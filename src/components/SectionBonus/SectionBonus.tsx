import React from 'react'
import { Title } from '../Title/Title'

import './SectionBonus.scss'

export const SectionBonus = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'НАШИ БОНУСЫ ДЛЯ ВАС'} line={true} />
            <div className='sectionTextParagraph'>
                <h3>Во время учебы каждый ученик получает несколько бонусных занятий и тренингов:</h3>
                <ul className='itemsList'>
                    <h3>Тренинги:</h3>
                    <li className='item'>СПА мастер АЛМАСК</li>
                    <li className='item'>СПА мастер АЛЬГАНИКА</li>
                </ul>
                <ul className='itemsList'>
                    <h3>Дополнительные занятия</h3>
                    <li className='item'>по продвижению, экономическим и юридическим основам работы в бьюти индустрии</li>
                    <li className='item'>по работе с массажерами (банки, лапонька, чудо-рукавички и тд)</li>
                    <li className='item'>по основам СУ-ДЖОК терапии</li>
                    <li className='item'>по основам лимфодренажного массажа</li>
                    <li className='item'>по эргономике</li>
                    <li className='item'>по психологии</li>
                </ul>
            </div>
        </section>
    )
}
