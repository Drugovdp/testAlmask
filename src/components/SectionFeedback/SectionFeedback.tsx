import React, { useRef, useState } from 'react'

import axios from 'axios'

import './SectionFeedback.scss'

import feedbackImg from '../../images/feedback.jpg'
import { Title } from '../Title/Title'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export const SectionFeedback = () => {

  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valueTel, setValueTel] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: ''
  })

  const onFocusNameHandler = (e: React.FocusEvent<HTMLElement>) => {
    if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.textContent = ''
  }

  const onChangeNameHandler = (value: string) => {
    const re = /^[A-zА-яЁё]{0,10}$/
    if (re.test(valueName)) {
      setValueName(value.trim())
    }
  }

  const onChangeEmailHandler = (value: string) => {
    setValueEmail(value.trim())
  }

  const onChangeTelHandler = (value: string) => {
    const re = /^\d{1,11}$/
    if (re.test(value)) {
      setValueTel(value.replace(/^[0-9]/, '8'))
    }
  }

  const onClickHandler = () => {

    let countError = 0
    const API_PATH = 'http://testemail/index.php'

    if (valueName) {
      formData.name = valueName
    } else {
      const span = document.querySelectorAll('.inputFeedBack')[0].nextSibling
      if (span) span.textContent = 'Поле пустое'; countError++
    }

    if (!valueEmail) {
      const span = document.querySelectorAll('.inputFeedBack')[1].nextSibling
      if (span) span.textContent = 'Поле пустое'; countError++
    }

    const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    if (valueEmail && !re.test(valueEmail)) {
      const span = document.querySelectorAll('.inputFeedBack')[1].nextSibling
      if (span) span.textContent = 'Некоректный адрес'; countError++
    }

    if (valueEmail) {
      formData.email = valueEmail
    }

    if (valueTel === '') {
      const span = document.querySelectorAll('.inputFeedBack')[2].nextSibling
      if (span) span.textContent = 'Поле пустое'; countError++
    } else {
      formData.tel = valueTel
    }

    if (countError === 0) {

      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(formData)
      })
        .then(result => console.log(result.config.data))
        .catch(error => console.log('error'))

      setFormData({
        name: '',
        email: '',
        tel: ''
      })
      setValueName('')
      setValueEmail('')
      setValueTel('')
    }
  }
  
  return (
    <section className='sectionFeedback'>
      <div className="feedBackBox">
        <div className="containerForm">
          <Title titleh2={'Обратная'} span={'связь'} titleh4={'Свяжитесь с нами'} textCentr={false} />
          <div className='formBodyRow'>
            <div className='formItem'>
              <Input
                value={valueName}
                classNames={'inputFeedBack'}
                placeholder={'Введите имя'}
                onChangeValueHandler={(value) => onChangeNameHandler(value)}
                onFocusNameHandler={(e) => onFocusNameHandler(e)}
              />
              <span></span>
            </div>
            <div className='formItem'>
              <Input
                value={valueEmail}
                classNames={'inputFeedBack'}
                placeholder={'mail@mail.ru'}
                onChangeValueHandler={(value) => onChangeEmailHandler(value)}
              />
              <span></span>
            </div>
            <div className='formItem'>
              <Input
                value={valueTel}
                classNames={'inputFeedBack'}
                placeholder={'89999876543'}
                onChangeValueHandler={(value) => onChangeTelHandler(value)}
                onFocusNameHandler={onFocusNameHandler}
              />
              <span></span>
            </div>
            <Button callBack={onClickHandler}>Отправить</Button>
          </div>
          <div className='formText'>Нажимая на кнопку, Вы принимаете <a href='#'>Положение</a> и <a href='#'>Согласие</a> на обработку персональных данных.FormBody</div>
        </div>
        <div className="containerImg"><img src={feedbackImg} alt="" /></div>
      </div>
    </section>
  )
}
