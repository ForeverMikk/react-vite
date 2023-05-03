import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    const handleChange = (isChanging) => {
        return isChanging ? setCounter(counter + 1) : setCounter(counter - 1);
    }

    return (
        <>
            <h1>Counter App</h1>
            <p>valor: { counter }</p>
            <button onClick={ () => handleChange(true) }>+1</button>
            <button onClick={ () => handleChange(false) }>-1</button>
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