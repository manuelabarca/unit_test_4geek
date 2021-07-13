const sum = (a,b) => a+b;

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromDollarToYen = (dollar) => {
    let euros = dollar / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY
    return Number.parseInt(yenes)
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD

}

const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return Number.parseInt(pounds);
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
 // Aqui estamos exportando nuestra funcion sum
// a cualquier archivo que lo necesite