import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Pruebas en <FirstApp>', () => { 
    test('debe de hacer match con el snapshot', () => { 
        // Snapshot se refiere a que el componente se renderize de manera correcta

        render(<FirstApp />);
    });
});