import React from 'react'
import './index.css'
import { Delimiter } from 'components/shared/delimiter'
import { IconWithText } from 'components/shared/iconWithText'

interface props {
  category: string
  number: string
  group: string
  dealType: string
  totalPrice: number
  location: null | string
  description: string
  vatIncluded: boolean
  currency?: string
}

export const TotalInfo: React.FC<props> = (
  {
    category,
    number,
    totalPrice,
    location,
    vatIncluded,
    group,
    description,
    currency = '₽',
    dealType}) => {
  return (
    <div className="total__container">
      <IconWithText text={dealType} textClassNames="total__container__deal_type__text" />
      <div className="total__number"> {`№ 000000${number}`}</div>
      <div className="total__category_group">
        <div> {category} </div>
        <div> / </div>
        <div> {group} </div>
      </div>
      <div className="total__container__description"> {description} </div>
      <div className="total__total_price">
        <div className="total__total_price__price"> {`${totalPrice} ${currency}`} </div>
        { !vatIncluded && <div className="total__total_price__vat"> без НДС </div> }
      </div>
      <div className="location__container">
        <IconWithText text={location ? location : 'не определенно'} />
      </div>
      <Delimiter />
    </div>
  )
}