export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type governmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: governmentBuildingsStreetType
}

export type governmentBuildingsStreetType = {
    street: governmentBuildingsTitleType
}

export type governmentBuildingsTitleType = {
    title: string
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}