// Un hook es una funcion

import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {
    
    const [counter, setCounter] = useState( initialValue )
    
    const increment = ( value = 1) => { //De esta forma seria por si le mandaramos un valor y no dejarle uno fijo.
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        if( counter === 0) return; //Asi no devuelve nada - Tambien se puede hacer: if( counter > 0)
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}

