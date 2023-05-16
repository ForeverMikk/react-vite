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
            <h2>{counter}</h2>
            <button onClick={ () => handleChange(true) }>+1</button>
            <button onClick={ () => handleChange(false) }>-1</button>
            {/* // con aria label apuntas mas facilmente a un elemento si buscas por rol */}
            <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
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