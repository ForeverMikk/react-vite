import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('pruebas a <CounterApp>', () => { 

    const valorInicial = 10;

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={valorInicial} />)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
    });
    
    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value={valorInicial} />);
        // Simula un evento click donde encuentre texto "+1"
        fireEvent.click(screen.getByText('+1'));
        // screen.debug();
        expect(screen.getByText('11')).toBeTruthy();
    });
    
    test('debeb de funcionar el boton de reset', () => {
        render(<CounterApp value={365} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));
        // screen.debug();

        // con aria label apuntas mas facilmente a un elemento si buscas por rol
        screen.getByRole('button', {name: 'btn-reset'});
        expect(screen.getByText(365)).toBeTruthy();

    });
});