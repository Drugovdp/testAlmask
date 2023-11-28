import './SectionAbout.scss'

import imgAbout from '../../images/imgAbout.jpg'
import imgAboutMob1 from '../../images/imgAboutMob1.jpg'
import imgAboutMob2 from '../../images/imgAboutMob2.jpg'
import imgAboutMob3 from '../../images/imgAboutMob3.jpg'
import { Title } from '../Title/Title'


export const SectionAbout = () => {
    return (
        <section className='sectionAbout'>
            <div className='contentAbout'>
                <div className='photoLarge'>
                    <img src={imgAbout} alt="imgAbout" />
                </div>
                <div className='content'>
                    <Title titleh2={'Более'} span={'10 лет'} titleh4={'работы компании'} />
                    <div className='photoSmall'>
                        <div className='photoSmallAbout'><img src={imgAboutMob1} alt="imgAboutMob1" /></div>
                        <div className='photoSmallAbout'><img src={imgAboutMob2} alt="imgAboutMob2" /></div>
                        <div className='photoSmallAbout'><img src={imgAboutMob3} alt="imgAboutMob3" /></div>
                    </div>
                    <div className='text'>
                        <p>Описание компании нужно вставить сюда тем же шрифтом и тем же размером текста. Расскажите о себе, и о том, чем вы занимаетесь, как давно вы это делаете. Также в этом блоке вы можете написать несколько предложений о том, как начиналась работа вашей компании. Можно еще добавить пару слов о том, какие цели вы себе поставили и чего добились. Все это поможет в расположении клиента к вашей компании. </p>
                        <p>При небольшом объеме текста вы можете изменить размер блока в настройках, чтобы текст выглядел презентабельно. Если объем текста слишком большой, а размер изображения стоит минимальный, то вам необходимо перейти в настройки блока и изменить размер изображения на такой, чтобы его высота соответствовала высоте текста. </p>
                        <p>Цвет текста используйте черный либо оставьте без изменений (изначально цвет текста стоит темно-серый) - так он выглядит лучше и его приятнее читать. Обязательно соблюдайте орфографию и пунктуацию. Между абзацами рекомендуется использовать разрыв. Таким образом легче воспринимается поданная информация.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
