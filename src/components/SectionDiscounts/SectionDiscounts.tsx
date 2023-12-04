import React from 'react'
import { Title } from '../Title/Title'

export const SectionDiscounts = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'ВАШИ СКИДКИ'} line={true} />
            <div className='sectionTextParagraph'>
                <p>На всю косметику, массажные столы, расходники, на массажную одежду АЛМАСК.</p>
                <p>На дальнейшее обучение</p>
            </div>
        </section>
    )
}
