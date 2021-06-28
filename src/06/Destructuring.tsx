import React, {useState} from "react";


export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string, name ?: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimichState(m: string) {
    return [m, function (){}]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => { // пришел props, разорвали его на title и man, все остальное осталось в ...props

    const [message, setMessage] = useDimichState('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}