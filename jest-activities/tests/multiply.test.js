const multiply = require ('../src-codes/multiply');

describe('test multiply good scenarios', () => {
    test('multiply 3*2 should be equal to 6', () => {
        expect(multiply(3, 2)).toBe(6);
    });

    test('multiply 10*15 should be equal to 100', () => {
        expect(multiply(10, 15)).toBe(150);
        expect(multiply(10, 15)).toBeGreaterThan(100)
        expect(multiply(10, 15)).toBeLessThan(151)
    })

    test('multiply 5*5 should not equal to 250', () => {
        expect(multiply(5, 5)).not.toBe(250);
    })

    test('multiply 5*5 should equal to 25', () => {
        expect(multiply(5, 5)).toEqual(25);
        expect(multiply(5, 5)).toBeGreaterThanOrEqual(20)
        expect(multiply(5, 5)).toBeLessThanOrEqual(30)
    })
})