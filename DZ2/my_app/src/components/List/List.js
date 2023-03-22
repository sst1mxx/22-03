import React from 'react';

const List = ({ arr }) => {
    return (
        <div>
            {arr.map((el, idx) => <p key={idx}> {el.task} </p>)}
        </div>
    )
}

export default List