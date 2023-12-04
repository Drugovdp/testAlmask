import React from 'react'
import { Title } from '../Title/Title'

import './SectionRelation.scss'

export const SectionRelation = () => {
    return (
        <section className='sectionText'>
            <Title titleh2={'НАШЕ ОТНОШЕНИЕ К УЧЕНИКАМ'} line={true} />
            <div className='wrapperRelation'>
                <div className="titleItem">
                    <div className="numberItem"><span>1</span></div>
                    <div className="textItem">
                        <p>Мы создаем дружескую обстановку.</p>
                        <p>Не только качественно обучаем, но и проводим совместные мероприятия и праздники.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>2</span></div>
                    <div className="textItem">
                        <p>Каждому студенту преподаватель лично ставит руку.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>3</span></div>
                    <div className="textItem">
                        <p>Учим эргономике- правильной постановке рук, ног, всего тела.</p>
                        <p>Это помогает нашим студентам в будущем избежать профессиональных проблем массажистов - болей в суставах, спине, шее.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>4</span></div>
                    <div className="textItem">
                        <p>Даём качественную теоретическую базу и 80% практики.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>5</span></div>
                    <div className="textItem">
                        <p>Каждый ученик гарантированно получает знания от преподавателей и от руководителя Академии.</p>
                        <p>Всегда может обратиться за помощью лично к руководителю как во время учебы, так и после нее.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>6</span></div>
                    <div className="textItem">
                        <p>Создаём профессиональное комьюнити для всех учеников всех выпусков: чаты, праздники, фестивали.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>7</span></div>
                    <div className="textItem">
                        <p>Программа лояльности.</p>
                        <p>Каждый ученик получает скидки на дальнейшее обучение- на большие проф курсы и на авторские тренинги.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>8</span></div>
                    <div className="textItem">
                        <p>Трудоустройство- наших учеников охотно приглашают на работу массажные студии, лучших оставляем у себя.</p>
                    </div>
                </div>
                <div className="titleItem">
                    <div className="numberItem"><span>9</span></div>
                    <div className="textItem">
                        <p>Продвижение- учим продвижению, публикуем фрагменты работы групп в нашем инстаграмме (больше 30 тыс подписчиков).</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
