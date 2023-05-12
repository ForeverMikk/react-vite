import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas desestructurando Objetos', () => { 

    // Tests that the function returns the expected object when provided with required parameters. 
    test("test_us_context_with_required_params", () => {
        
        const result = usContext(
            { 
                clave: "007", 
                nombre: "James Bond", 
                edad: 40 
            }
        );
        
        expect(result).toEqual({
            nombreClave: "007",
            anios: 40,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });

});
