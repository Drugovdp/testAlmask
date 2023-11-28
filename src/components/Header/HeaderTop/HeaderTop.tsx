import logo from '../../../images/logo.svg'
import s from './HeaderTop.module.scss'

export const HeaderTop = () => {
    return (
        <div className={s.headerTop}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={s.trademark}><h1>ALMASK</h1></div>
                <nav className={s.nav}>
                    <ul className={s.navItems}>
                        <li><a href="#">Обучения</a></li>
                        <li><a href="#">Записаться</a></li>
                        <li><a href="#">Тренеры</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
                <div className={s.headerPhone}>
                    <div className={s.phone}><a className={s.phoneNum} href="tel:+79184156738">+7 918 415 67 38</a></div>
                </div>
        </div>
    )
}
