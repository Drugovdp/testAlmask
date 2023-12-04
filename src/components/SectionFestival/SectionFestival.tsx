import React from 'react'
import { Title } from '../Title/Title'

export const SectionFestival = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'НАШИ ФЕСТИВАЛИ'} line={true} />
            <div className='sectionTextParagraph'>
                <p>Мы проводим фестивали АЛМАСК два раза в год в Геленджике.</p>
                <p>Три дня обучения, проживания в крутом отеле в центре Геленджика, первая линия у моря, шведский стол и теплый бассейн - все это по цене обучения.</p>
            </div>
        </section>
    )
}
