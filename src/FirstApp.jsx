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

// Aqui declaramos los tipos de las props y si son requereidos
App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

App.defaultProps = {
    title: "No hay titulo",
    subtitle: 133
}

export default App;