import './SectionManager.scss'

import { Title } from '../Title/Title'


export const SectionManager = () => {
    return (
        <section className='sectionAbout'>
            <div className='contentAbout'>
                <div className="thumbWrap">
                    {/* <iframe width="560" height="315" src="https://youtu.be/7mE90ZGzeTo?si=kfTzTHmkuYT7NFDC" frameBorder="0" allowFullScreen></iframe> */}
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/7mE90ZGzeTo?si=eKWyHG-0994Am5hP&amp;controls=0&amp;start=22" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='content'>
                    <Title titleh2={'РУКОВОДИТЕЛЬ АКАДЕМИИ'} line={true} />
                    <div className='text'>
                        <p>Ухова Татьяна Миайловна - врач (специализации- неврология детская и взрослая, ЛФК, массаж, педиатрия, физиотерапия, бальнеология) психотерапевт,  руководитель краснодарского отделения ОППЛ- самой большой в России психотерапевтической Лиги, объединяющей русскоязычных психотерапевтов всего мира.</p>
                        <p>Создатель бренда АЛМАСК (проф косметика, одежда для массажистов), автор трех официально зарегистрированных методик массажа: МТЛ-похудение с первой процедуры без боли и синяков, ФЛАЙ - массаж - гипнотический антицеллюлитный массаж, возвращающий пропорции молодости фигуре, БОТОКС-массаж- пластический массаж лица с элементами краниосакральной терапии, возвращающий пропорции молодости лицу.</p>
                        <p>Автор официально зарегистрированной методики совмещения групповой психотерапии (Телесно-Ориентированная Терапия), медицины и массажа (Холистический Палсинг).</p>
                        <p>Эксперт ТВ проектов, автор книг «Публичные выступления» и «Лови удачу за хвост», многочисленных статей по психологии и здоровью.</p>
                        <p>Автор и ведущая ютуб-канала Психология, Здоровье, Красота.</p>
                        <p>Участник международных конференций по психотерапии, медицине и массажу.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
