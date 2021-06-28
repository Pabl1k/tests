import {governmentBuildingsType, HouseType} from '../02/02_02';

export const getStreetTitleGovBil =
    (buildings: Array<governmentBuildingsType>) => {
        return buildings.map(b => b.address.street.title)
    }

export function createMessages(houses: Array<HouseType>) {
    let callbackfn = (h: HouseType) => {

        return `Hello people from ${h.address.street.title}`;
    }
    let newArray = houses.map(callbackfn)
    return newArray
}

//return houses.map( h => `Hello people from ${h.address.street.title}` )