import { useState } from 'react'

import './SectionEducation.scss'

import { education } from '../state/state'

import { Title } from '../Title/Title'
import { Button } from '../Button/Button'

export const SectionEducation = () => {

  const [stateEducation, setStateEducation] = useState(education)

  const educations = stateEducation.map(el => {
    return (
      <div key={el.id} className='item'>
        <div className='itemImg'><img src={el.img} alt="" /></div>
        <div className='itemHeader'>
          <h2>{el.title}</h2>
        </div>
        <div className='itemText'>
          <p>{el.description}</p>
        </div>
        <Button callBack={()=>{}}>Узнать подробнее</Button>
      </div>
    )
  })

  return (
    <section className='sectionEducation'>
      <Title titleh2={'Процесс'} span={'обучения'} textCentr={true} />
      <div className='subTitle'>
        <p>Мы предоставляем профессиональное обучение в нашей школе для всех желающих</p>
      </div>
      <div className='educationContent'>
        {educations}
      </div>
    </section>
  )
}
