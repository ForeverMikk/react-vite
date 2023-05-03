import PropTypes, { string } from 'prop-types';

const App = ({title, subttitle}) => {

    return (
        // Pasando props a traves de un componente
        <>
            <h1>{title}</h1>
            <p>{subttitle}</p>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

export default App;