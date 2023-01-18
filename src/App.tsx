import React, { useEffect, useState } from 'react'
import { List } from 'components/list'
import { TList } from 'assets/types/listTypes'
import './App.css'


const mock = [
  {
  id: 'ed3056b3-0e0d-4823-a4fc-280d93d5b891',
  dealType: 'Продажа вторичных материальных ресурсов',
  beginDate: '2022-09-08T00:00:00Z',
  endDate: '2022-09-15T00:00:00Z',
  isResourceAvailable: false,
  number: '92',
  vatIncluded: false,
  participants: {
    count: 0
  },
  item: {
    id: 'ed3056b3-0e0d-4823-a4fc-280d93d5b891',
    totalPrice: 340000,
    price: 10000,
    measurementUnit: 'Метрическая тонна (1000 кг)',
    category: 'Отходы стекла',
    group: 'Зеркала',
    mark: null,
    quantity: 34,
    description: 'Отходы стекла'
  },
  location: null,
  distance: 0
}
]

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [Lots, setLots] = useState<TList[]>(mock)
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const res = await fetch('https://development.alliance-eco.ru/api/lots/best')
        const data = await res.json()
        setLots(data)
        setIsLoading(false)
      } catch (err: any) {
        setFetchError(err)
        setIsLoading(false)
      }
    })()
  }, [])
  return (
    <div className="wrapper">
      {
        isLoading ? <div> loading ... </div> : Lots.map(lot => <List key={lot.id} List={lot} />)
      }
    </div>
  )
}