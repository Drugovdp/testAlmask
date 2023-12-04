import React from 'react'

import './SectionLicense.scss'
import { Title } from '../Title/Title'

export const SectionLicense = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'НАША ЛИЦЕНЗИЯ'} line={true} />
            <div className='sectionTextParagraph'>
                <p>Полученная нами Государственная Лицензия РФ на образовательную деятельность определяет высокий уровень обучения</p>
            </div>
        </section>
    )
}
