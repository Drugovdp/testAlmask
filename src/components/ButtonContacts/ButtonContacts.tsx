import React, { ChangeEvent, useState } from 'react'

import './ButtonContacts.scss'

import whatsApp from '../../images/whatsapp.png'
import telegram from '../../images/telegramma.png'
import tel from '../../images/telefon.png'

type TypePropsButtonContacts = {
    heightBtn: string
}

export const ButtonContacts: React.FC<TypePropsButtonContacts> = ({heightBtn}) => {

    return (
        <div className='btnContacts' style={{height: heightBtn}}>
            <a className='btnContactsWhatsApp' href="https://wa.me/79184156738?text=Здравствуйте! Меня интересует...">
                <img src={whatsApp} alt="" />
            </a>
            <a className="btnContactsTelegram" href="https://t.me/alganika_krasnodar" target="_blank">
                <img src={telegram} alt="" />
            </a>
            <a className="btnContactsTel" href="tel:+79184156738" target="_blank">
                <img src={tel} alt="" />
            </a>
        </div>
    )
}
