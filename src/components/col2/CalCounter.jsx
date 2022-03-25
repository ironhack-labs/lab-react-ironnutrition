import React from 'react';

const Calcounter = ({calToday}) => {

    const calculateCal = () => {
        return calToday.reduce((acc, curr) => acc + (curr.calories * 1), 0)
    }

    return (
        <ul className='list-group '>
            <h2>Todays Meals</h2>
            {calToday && calToday.length > 0 ? (
                calToday.map((el) => {
                    return <li key={el.id}>
                        {el.quantity} {el.name} {el.calories}
                        </li>} ) 
            ) : (
                <p className="text-muted">Add some dishes!!</p>
            )}

            {calToday && calToday.length > 0 && (
                <div className="mt-3">
                <p><strong>Total: </strong> {calculateCal()} calories</p>
                </div>
            )}
        </ul>
    );
}

export default Calcounter;
