import React from 'react'

import './Popup.scss'

import foto from '../../images/TatynaUhova.jpeg'
import clossed from '../../images/crossed.png'
import { ButtonContacts } from '../ButtonContacts/ButtonContacts'

type PropsTypePopup = {
    clossedPopup: boolean
    setClossedPopup: (clossedPopup: boolean) => void
}

export const Popup: React.FC<PropsTypePopup> = ({clossedPopup, setClossedPopup}) => {

    const handlerClossed = () => {
        setClossedPopup(true)
    }

    return (
        <div className='popup'>
            <div className="popupBox">
                <div className='btnClose' onClick={handlerClossed}>
                    <img src={clossed} alt="" />
                </div>
                <div className='popupBoxContent'>
                    <div className="popupBoxContentImg">
                        <img src={foto} alt="" />
                    </div>
                    <div className="popupBoxContentText">
                        <h3>Напишите мне любым удобным способом</h3>
                        <div className='popupContact'>
                            <ButtonContacts heightBtn={'50px'}/>
                        </div>
                    </div>
                </div>
                <div className="popupBoxFooter">
                    <p className='footerText'>Алмаск</p>
                    <p className='footerText'>Массаж</p>
                    <p className='footerText'>СПА</p>
                    <p className='footerText'>Псиология</p>
                </div>
            </div>
        </div>
    )
}
