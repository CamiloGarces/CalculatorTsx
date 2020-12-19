import React, { FC } from 'react';
import Button, { ButtonClickHandler } from './Button/Button'

const numbers = [7,8,9,4,5,6,1,2,3,0];

const renderbuttons = (onclickNumber: ButtonClickHandler ) => {
    return numbers.map( number => {
        return(
            <Button key={number} text={number.toString()} clickHandler={onclickNumber}/>
        )
    })
}

type Props = {
    onclickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({ onclickNumber }) => (
    <section className="numbers">
       {
           renderbuttons(onclickNumber)
       }
    </section>
)


export default Numbers;