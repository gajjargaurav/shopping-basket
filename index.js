const expect = require('expect')

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

const receipt = (basket, catalogue) => {
	const receipt = { items: []}
	const order = basket.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})

	receipt.total = catalogue.reduce((total, item) => {
		let itemPrice = 0
		if(order[item.name]) {
			if(item.discount) {
				itemPrice = item.discount.formula(order[item.name], item.price)
				// console.log(`${item.name} x ${order[item.name]} : ${itemPrice}p`)
				// console.log(item.discount.message)
				receipt.items.push({ name: item.name, price: itemPrice, message: item.discount.message })
			}
			else {
				itemPrice = order[item.name]*item.price
				// console.log(`${item.name} x ${order[item.name]}: ${itemPrice}p`)
				receipt.items.push({ name: item.name, price: itemPrice })
			}
			return total + itemPrice
		}
		return total
	}, 0)

	return receipt
	// console.log(`Total price : ${totalPrice}p`)
}

// Tests
// Positive Tests
const stub = {
	simple: {
		basket:['apples', 'apples', 'oranges', 'papayas', 'apples' ],
		receipt: {
			items: [
				{ name: 'apples', price: 75 },
				{ name: 'oranges', price: 30 },
				{ name: 'papayas', price: 50, message: 'three for the price of two' }
			],
			total: 155
		}
	}
}
const result = receipt(stub.simple.basket, catalogue)

// receipt(basket, catalogue)
expect(result).toEqual(stub.simple.receipt)
