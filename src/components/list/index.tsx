import React from 'react'
import { TList } from 'assets/types/listTypes'
import { TotalInfo } from 'components/list/totalInfo'
import { ItemsInfo } from 'components/list/itemsInfo'

interface props {
 List:TList
}

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC'
} as any

export const List: React.FC<props> = ({List}) => {
  const firstItems = [
    {
      header: 'количество',
      text: List.item.quantity.toString(),
    },
    {
      header: 'Средние единицы измерения',
      text: List.item.measurementUnit
    },
    {
      header: 'Стоимость за единицу измерения',
      text: List.item.price.toString() + (List.item.mark ? List.item.mark : '₽')
    }
  ]

  const secondItems = [
    {
      header: 'Начало сбора предложений',
      text: new Date( List.beginDate).toLocaleString('ru', options)
    },
    {
      header: 'Окончание сбора предложений',
      text: new Date(List.endDate).toLocaleString('ru', options)
    },
    {
      header: 'Участников',
      text: List.participants.count.toString()
    }
  ]
  return (
    <div className="list__container">
      <TotalInfo
        category={List.item.category}
        number={List.number}
        group={List.item.group}
        dealType={List.dealType}
        totalPrice={List.item.totalPrice}
        location={List.location}
        description={List.item.description}
        vatIncluded={List.vatIncluded}
      />
      <ItemsInfo items={firstItems} showDelimiter />
      <ItemsInfo items={secondItems} />
    </div>
  )
}