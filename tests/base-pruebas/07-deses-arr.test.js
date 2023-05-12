import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
    test('debe de retornar un string y un numero', () => { 

        const [letters, numbers] = retornaArreglo();

        // Aqui solo esperas recivir un valor
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        // Aqui especificas el tipo de dato que vas a recivir
        // no importa el valorS
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // Otra forma de recivir cualquier string
        expect(letters).toEqual(expect.any(String));

     

    });
});