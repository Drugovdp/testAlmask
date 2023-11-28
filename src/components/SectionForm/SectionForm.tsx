import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'

import './SectionForm.scss'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export const SectionForm = () => {

    const [valueNameForm, setvalueNameForm] = useState('')
    const [valueEmailForm, setvalueEmailForm] = useState('')
    const [valueTelForm, setvalueTelForm] = useState('')
    const [formDataForm, setformDataForm] = useState({
        name: '',
        email: '',
        tel: ''
    })

    const onFocusNameHandler = (e: React.FocusEvent<HTMLElement>) => {
        if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.textContent = ''
    }

    const onChangeNameHandler = (value: string) => {
        const re = /^[A-zА-яЁё]{0,10}$/
        if (re.test(valueNameForm)) {
            setvalueNameForm(value.trim())
        }
    }

    const onChangeEmailHandler = (value: string) => {
        setvalueEmailForm(value.trim())
    }

    const onChangeTelHandler = (value: string) => {
        const re = /^\d{1,11}$/
        if (re.test(value)) {
            setvalueTelForm(value.replace(/^[0-9]/, '8'))
        }
    }

    const onClickHandler = () => {

        let countError = 0
        const API_PATH = 'http://testemail/sendmail.php'

        if (valueNameForm) {
            formDataForm.name = valueNameForm
        } else {
            const span = document.querySelectorAll('.inputForm')[0].nextSibling
            if (span) span.textContent = 'Поле пустое'; countError++
        }

        if (!valueEmailForm) {
            const span = document.querySelectorAll('.inputForm')[1].nextSibling
            if (span) span.textContent = 'Поле пустое'; countError++
        }

        const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        if (valueEmailForm && !re.test(valueEmailForm)) {
            const span = document.querySelectorAll('.inputForm')[1].nextSibling
            if (span) span.textContent = 'Некоректный адрес'; countError++
        }

        if (valueEmailForm) {
            formDataForm.email = valueEmailForm
        }

        if (valueTelForm === '') {
            const span = document.querySelectorAll('.inputForm')[2].nextSibling
            if (span) span.textContent = 'Поле пустое'; countError++
        } else {
            formDataForm.tel = valueTelForm
        }

        if (countError === 0) {

            const loginFormData = new FormData();
            loginFormData.append("username", formDataForm.name)
            loginFormData.append("email", formDataForm.email)
            loginFormData.append("tel", formDataForm.tel)

            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: JSON.stringify(formDataForm)
            })
                .then(result => console.log(result.data))
                .catch(error => console.log('error'))

            console.log(formDataForm)

            setformDataForm({
                name: '',
                email: '',
                tel: ''
            })
            setvalueNameForm('')
            setvalueEmailForm('')
            setvalueTelForm('')
        }
    }

    return (
        <section className='sectionForm'>
            <div className='formBlock'>
                <h4 className='formBlockTitle'>Запишитесь на консультацию</h4>
                <div className='formBodyColumn'>
                    <div className='formItem'>
                        <Input
                            value={valueNameForm}
                            classNames={'inputForm'}
                            placeholder={'Введите имя'}
                            onChangeValueHandler={(value) => onChangeNameHandler(value)}
                            onFocusNameHandler={(e) => onFocusNameHandler(e)}
                        />
                        <span></span>
                    </div>
                    <div className='formItem'>
                        <Input
                            value={valueEmailForm}
                            classNames={'inputForm'}
                            placeholder={'mail@mail.ru'}
                            onChangeValueHandler={(value) => onChangeEmailHandler(value)}
                        />
                        <span></span>
                    </div>
                    <div className='formItem'>
                        <Input
                            value={valueTelForm}
                            classNames={'inputForm'}
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
        </section>
    )
}
