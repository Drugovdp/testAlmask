import React from 'react'
import { Title } from '../Title/Title'

export const SectionCourse = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'КУРС МАССАЖА ВО ВРЕМЯ УЧЕБЫ ДЛЯ ВАС'} line={true} />
            <div className='sectionTextParagraph'>
                <p>Каждый ученик получает полноценный курс массажа на лучшей косметике.</p>
                <p>Мы не приглашаем моделей, студенты делают массаж друг другу.</p>
                <p>Таким образом, наши ученики не просто получают две профессии, но и курс оздоровительного массажа на лучшей косметике</p>
            </div>
        </section>
    )
}
