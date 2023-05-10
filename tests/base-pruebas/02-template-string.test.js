import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02 Template String', () => { 
    
    test('getSaludo debe retornar "Hola Fernando"', () => { 

        const name = "Michael";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
     })

 })