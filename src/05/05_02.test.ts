import {CityType} from "../02/02_02";
import {createMessages, getStreetTitleGovBil} from "./05_2";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                },
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 100,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 100000
    }
})

test('list of streets titles', () => {
    let streetName = getStreetTitleGovBil(city.governmentBuildings);

    expect(streetName.length).toBe(2);
    expect(streetName[0]).toBe('Central Str');
    expect(streetName[1]).toBe('South Str');
})

test('create greeting messages for streets',() => {
    let messages = createMessages(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello people from White street');
    expect(messages[1]).toBe('Hello people from Happy street');
    expect(messages[2]).toBe('Hello people from Happy street');

})








