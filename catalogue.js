const discount = {
	formula: (count, price) => count%3 === 0 ? count*price*2/3 : count*price,
	message: 'three for the price of two'
}

const catalogue = [
	{ name: 'apples', price: 25 },
	{ name: 'oranges', price: 30 },
	{ name: 'garlic', price: 15 },
	{ name: 'papayas', price: 50, discount }
]

module.exports = catalogue
