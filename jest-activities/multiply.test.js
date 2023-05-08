const multiply = require ('./multiply');

describe('test multiply good scenarios', () => {
    test('multiply 3*2 should be equal to 6', () => {
        expect(multiply(3, 2)).toBe(6);
    });

    test('multiply 10*15 should be equal to 100', () => {
        expect(multiply(10, 15)).toBe(150);
    })
})