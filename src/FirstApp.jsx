

const newMessage = {
    message: "Hola Mundo",
    title: "Michael"
}

const getResult = () => {
    return 4 + 4;
}

const App = () => {

    return (
        // Componente Frafment <></> se usa para encapsular tu componente en React
        // sin necesitar un <div> o alguna otra etiqueta
        <>
            <h1>{getResult()}</h1>
            <p>Soy un subtutilo</p>
        </>
    )
}

export default App;