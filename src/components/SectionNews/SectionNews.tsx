import './SectionNews.scss'

import { news } from '../state/state'
import { Title } from '../Title/Title'
import { useState } from 'react'


export const SectionNews = () => {

    const [stateNews, setStateNews] = useState(news)
    
    const contentNews = stateNews.map(el => {
        return (
            <div key={el.id} className="itemNews">
                <div className="itemNewsImg"><img src={el.img} alt="" /></div>
                    <div className="blockText">
                        <div className="itemNewsHeader">
                            <h2>{el.title}</h2>
                        </div>
                        <div className="itemNewsText">
                            <p>{el.description}</p>
                        </div>
                    </div>
            </div>
        )
    })

  return (
    <section className="sectionNews">
        <Title titleh2={'Новости'} span={'и акции'} textCentr={true}/>
        <div className="contentNews">
            {contentNews}
        </div>
    </section>
  )
}
