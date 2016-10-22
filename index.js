const order = require('./order')
const catalogue = require('./catalogue')
const basket = process.argv[2].split(' ')

console.log(order(basket, catalogue))
