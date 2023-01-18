import React from 'react'
import { IconWithText, TIconWithTextProps } from 'components/shared/iconWithText'
import { Delimiter } from 'components/shared/delimiter'
import { v4 as uuid } from 'uuid'

interface props {
  items: (TIconWithTextProps & { header: string})[]
  showDelimiter?: boolean
}

export const ItemsInfo: React.FC<props> = ({showDelimiter, items}) => {
  return (
    <div className="list_item__container">
      {items.map(item =>
          <div key={uuid()} className="list_item__container__block">
            <div className="list_item__container__block__header">{item.header}</div>
            <IconWithText text={item.text} imgSrc={item.imgSrc} alt={item.alt} />
          </div>
        )}
      {
        showDelimiter && <Delimiter />
      }
    </div>
  )
}