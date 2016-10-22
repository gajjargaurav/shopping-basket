const receipt = require('./receipt')
const catalogue = require('./catalogue')
const basket = process.argv[2].split(' ')

console.log(receipt(basket, catalogue))
