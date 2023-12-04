import logo from '../../../images/logo.svg'
import { ButtonContacts } from '../../ButtonContacts/ButtonContacts'
import './HeaderTop.scss'

export const HeaderTop = () => {
    return (
        <div className='headerTop'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='trademark'><h1>ALMASK</h1></div>
                <nav className='nav'>
                    <ul className='navItems'>
                        <li><a href="#">Обучения</a></li>
                        <li><a href="#">Записаться</a></li>
                        <li><a href="#">Тренеры</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
                <ButtonContacts heightBtn={'50%'} />
        </div>
    )
}
