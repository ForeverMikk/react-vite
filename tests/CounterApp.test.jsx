import { render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('pruebas a <CounterApp>', () => { 

    const valorInicial = 100;

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={valorInicial} />)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100} />);
        // screen.debug();

        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
    });
});