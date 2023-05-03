
const App = ({title, subttitle}) => {

    console.log(title);

    return (
        // Pasando props a traves de un componente
        <>
            <h1>{title}</h1>
            <p>{subttitle}</p>
        </>
    )
}

export default App;