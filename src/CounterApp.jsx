import PropTypes, { string } from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubstract = () => {
        setCounter(counter - 1);
    }
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>Counter App</h1>
            <p>valor: { counter }</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

// Aqui declaramos los tipos de las props y si son requereidos
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 1
}

export default CounterApp;