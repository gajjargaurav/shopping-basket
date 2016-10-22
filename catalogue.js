const discount = (count, price) => {
	if(count%3 === 0) {
		return {
			price: count*price*2/3,
			message: 'three for the price of two'
		}
	}
	return {
		price: count*price
	}
}

const catalogue = [
	{ name: 'apples', price: 25 },
	{ name: 'oranges', price: 30 },
	{ name: 'garlic', price: 15 },
	{ name: 'papayas', price: 50, discount }
]

module.exports = catalogue
