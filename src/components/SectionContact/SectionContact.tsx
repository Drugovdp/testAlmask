import React from 'react'

import './SectionContact.scss'
import { Title } from '../Title/Title'

export const SectionContact = () => {
    return (
        <section className="sectionContact">
            <div className="contact">
                <div className="contentContact">
                    <Title titleh2={'Контакты'} />
                    <p className="sity">г. Краснодар</p>
                    <p>улица Сормовская, 214</p>
                    <p>+7 (918) 415-67-38</p>
                    <p>Ежедневно с 09:00 до 22:00</p>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A110ffaee6b7ab6bd765ce2b63c11f486c13d897fbae5368b855bbc535a3199f6&amp;source=constructor" width="100%" height="450" frameBorder="0"></iframe>
            </div>
        </section>
    )
}
