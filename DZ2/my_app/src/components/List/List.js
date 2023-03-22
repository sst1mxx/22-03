import React from 'react';

const List = ({ arr }) => {
    return (
        <div>
            {arr.map((el) => <p key={el.id}> {el.task} </p>)}
        </div>
    )
}

export default List