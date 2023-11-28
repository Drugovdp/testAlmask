import './SectionOurServices.scss'

import imagePlaceholder from '../../images/imagePlaceholder.png'
import { Title } from '../Title/Title'
import { useState } from 'react'
import { oursevices } from '../state/state'
import { Button } from '../Button/Button'

export const SectionOurServices = () => {

    const [ourServicesState, setOurServicesState] = useState(oursevices)

    const ourservicesNew = ourServicesState.map(el => {
        return (
            <div key={el.id} className='contentItemBox'>
                <div className='contentItemBoxImg'><img src={el.img} alt="" /></div>
                <div className='contentItemBoxText'>
                    <div className='titleItem'>{el.title}</div>
                    <div className='textItem'>{el.description}</div>
                </div>
                <Button className={'contentItemBoxBtn'} callBack={()=>{}}>Подробнее</Button>
            </div>
        )
    })

    return (
        <section className='sectionService'>
            <Title titleh2={'Наши'} span={'услуги'} textCentr={true} />
            <div className='contentItems'>
                {ourservicesNew}
            </div>
        </section>
    )
}
