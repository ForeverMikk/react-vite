import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas 11-async-await', () => { 
    // test('getImagen debe retornar un URL de la imagen', async() => { 

    //     // node 18 en adelante no tiene errores de fecth
    //     const url = await getImagen();
        
    //     expect(typeof url).toBe('string');
    // });

    test('getImagen debe retornar un error', async() => { 

        const resp = await getImagen();

        expect(resp).toBe('No se encontro la imagen')
    });
});