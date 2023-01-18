export interface TParticipants {
  count: number
}

interface Item {
  id: string,
  totalPrice: number,
  price: number,
  measurementUnit: string,
  category: string,
  group: string,
  mark: string | null,
  quantity: number,
  description: string
}
export interface TList {
  id: string,
  dealType: string,
  beginDate: string,
  endDate: string,
  isResourceAvailable: boolean,
  number: string,
  vatIncluded: boolean,
  participants: TParticipants,
  item: Item,
  location: string | null,
  distance: number
}