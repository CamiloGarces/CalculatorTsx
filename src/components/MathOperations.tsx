import React, { FC } from 'react';

import Button, { ButtonClickHandler } from './Button/Button'

type Props = {
    onclickOperations: ButtonClickHandler,
    onClickEqual: ButtonClickHandler
}

const MathOperations:FC<Props> = ({onclickOperations, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onclickOperations}/>
        <Button text="-" clickHandler={onclickOperations}/>
        <Button text="*" clickHandler={onclickOperations}/>
        <Button text="/" clickHandler={onclickOperations}/>
        <Button text="=" clickHandler={onClickEqual}/>
    </section>
)



export default MathOperations;