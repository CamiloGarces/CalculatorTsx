import React, { FC } from 'react';

type Props = {
    value: string
}
const Result: FC<Props> = ({ value }) => (
    <div className="result">
        {value}
    </div>
)


Result.defaultProps = {
    value: "0" 
}

export default Result;