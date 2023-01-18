import React from 'react'
import './index.css'

export interface TIconWithTextProps {
  imgSrc?: string
  alt?: string
  text: string
  textClassNames?: string
}

export const IconWithText:React.FC<TIconWithTextProps> = ({imgSrc, text, alt, textClassNames}) => {
  return (
    <div className="icon__container">
      {
        imgSrc ? <img alt={alt} src={imgSrc} className="icon__container__src" /> : <div> i </div>
      }
      <div className={textClassNames ? textClassNames : 'icon__container__text'}> {text} </div>
    </div>
  )
}