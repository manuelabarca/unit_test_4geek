//Importar funcion que estamos exportando en app.js

const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
    expect(total).toEqual(23);
    expect(total).toBeGreaterThan(22);
}) //Jest ejecutara todas las funciones que empiezan con la palabra test()


describe('Testing about convert money', () => {

    test('One euro should be 1.206 dollars', () => {
        const dollars = fromEuroToDollar(3.5)

        expect(dollars).toBe(4.2);
    })

    test('A hundred dollars should be  10658 yenes', () => {
        const yenes = fromDollarToYen(100);
        expect(yenes).toBe(10658)
    })

    test('A 12.300 yenes should be 77 british pound', () => {
        const pounds = fromYenToPound(12300);
        expect(pounds).toBe(76)
    } )
})