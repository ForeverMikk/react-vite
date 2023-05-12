import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

// Por defecto todas las pruebas son sincronas
describe('Pruebas en 09-promesas', () => { 

    // Para que jest termine una funcion asincrona se usa done
    // El done indica cuando se tiene que terminar la prueba
    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
              
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                // El donde debe ser llamado dentro de la misma promesa
                done();
            })
    });

    test('getHeroeByIdAsync debe retornar error si heroe no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {
                console.log(error);

                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                done();
            }) 
    });
});