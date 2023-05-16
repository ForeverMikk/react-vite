import { render, screen } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en <FirstApp>', () => { 

    const title = 'Hola, soy Goku';
    const subtitle = 'Souy un subtitulo';
    
    test('debe de hacer match con el snapshot', () => { 

        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });


    test('debeb mostrar el "Hola, soy Goku"', () => { 

        render(<FirstApp title={title} />);
        // screen.debug(); // te muestra el Componente del render
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    })
    
    test('debe enviar el subtitulo enviado por props', () => {
        
        render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );

        expect(screen.getAllByText(subtitle).length).toBe(2);
        
    });
    
});