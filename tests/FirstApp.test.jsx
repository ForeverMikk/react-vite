import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en <FirstApp>', () => { 
    // Snapshot se refiere a que el componente se renderize de manera correcta
    test('debe de hacer match con el snapshot', () => { 

        const title = 'Hola soy goku';
        const {container} = render(<FirstApp title={title}/>);

        expect(container).toMatchSnapshot();
    });


    test('debeb mostrar el titulo en un h1', () => { 

        const title = 'Hola soy Vegeta';
        const {container, getByText} = render(<FirstApp title={title}/>);
        // Aqui estamos buscando el texto dentro del documento
        expect(getByText(title)).toBeTruthy();

        // Con esto puedes buscar de manera directa los elementos con JS
        // Aqui se evalua lo que esta dentro del h1 y lo compara con el titulo
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);


    });
});