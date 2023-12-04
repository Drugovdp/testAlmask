import React from 'react'

import './SectionDocument.scss'
import { Title } from '../Title/Title'

export const SectionDocument = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'ВАШИ ДОКУМЕНТЫ'} line={true} />
            <div className='sectionTextParagraph'>
                <p>Вы получите документы установленного  образца: удостоверение в твердых корочках. Такие документы высоко ценятся</p>
            </div>
        </section>
    )
}
