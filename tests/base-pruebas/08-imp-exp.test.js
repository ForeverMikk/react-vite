import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById retorna un heroes por ID ', () => {

        const id = 1;

        const heroe = getHeroeById(id);
        
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
     });
    
     test('getHeroeById retorna undefiend si no existe el heroe', () => {

        const id = 100;

        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();
        // expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
     });


    // Tarea
    // Debe retornar un arreglo con los heroes de DC
    test('debe retornar un arreglo de DC', () => { 
        const heroesDC = getHeroesByOwner('DC');
       
        // Length === 3
        expect(heroesDC.length).toBe(3);
         
        // toEqual al arreglo filtrado
        expect(heroesDC).toEqual([{
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },    
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);

        // heroes filtrados
        const heroerFiltrados = heroes.filter((hero) => hero.owner === 'DC');
        // toEqual al arreglo filtrado de otra forma
        expect(heroesDC).toEqual(heroerFiltrados);

     });

    // Debe retornar un arreglo con los heroes de marvel
    test('debe retornar un arreglo de Marvel', () => { 
        const heroerMarvel = getHeroesByOwner('Marvel');

        // lenght === 2
        expect(heroerMarvel.length).toBe(2);
    });


 });

