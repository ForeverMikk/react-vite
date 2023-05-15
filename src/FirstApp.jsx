import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({title, subtitle, name}) => {

    return(
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Michael',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo'
}

export default FirstApp;