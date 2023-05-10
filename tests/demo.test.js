describe('Pruebas en el componente Demo', () => {

    test('Esta prueba no debe fallar', ()=> {
        // Las Pruebas tienen que cumplir estos 3 pasos
        // 1. 1. Inicialización
        const message1 = "Hola Mundo";
        
        // 2. El estimulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento… esperado
        expect(message1).toBe(message2);
    })
    
 })

