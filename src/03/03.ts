import {StudentType} from "../02/02";
import {CityType, governmentBuildingsType, HouseType} from "../02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true;
}

export const whereLives = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoney = (buildings: governmentBuildingsType, budget: number) => {
    buildings.budget += budget
}

export const repairedHouse = (rep: HouseType) => {
    rep.repaired = true;
}

export const toFireStaff = (staff: governmentBuildingsType, staffFire: number) => {
    staff.staffCount -= staffFire;
}

export const toHireStaff = (staff: governmentBuildingsType, staffHire: number) => {
    staff.staffCount += staffHire;
}

export function createMessage(city: CityType) {
    //return 'Hello ' + city.title + ' citizens. I want you to be happy. All ' + city.citizensNumber + ' humans';
    return `Hello ${city.title} citizens. I want you to be happy. All ${city.citizensNumber} humans`;
}