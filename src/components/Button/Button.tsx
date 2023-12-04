import React from 'react'

import './Button.scss'

type TypePropsButton = {
    children: React.ReactNode
    className?: string
    callBack: () => void
}

export const Button: React.FC<TypePropsButton> = ({children, className, callBack}) => {
  
  const classBtn = `${className ? className : ''} ${'button'}`
  
    const onClickHandler = () => {
        callBack()
    }

  return (
    <div style={{textAlign: 'center'}}>
      <button className={classBtn} onClick={onClickHandler}>{children}</button>
    </div>
   
  )
}
