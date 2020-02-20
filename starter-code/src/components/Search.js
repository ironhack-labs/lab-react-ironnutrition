import React from 'react'

function Search({findFood}) {
    //componente hijo; destructuramos la funcion que viene de padre {findFood}
    
    return (
        <div>
            {/* el target nos indica quien realizo la accion, en este caso el input */}
            {/* e.target.value enviale el valor que tiene un elemento que realizo la accion */}
            <input onKeyUp={(e) => findFood(e.target.value)} />
        </div>
    )
}

export default Search
