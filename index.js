const basket = ['apples', 'apples', 'oranges', 'papayas', 'papayas','papayas', 'apples' ]
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

const order = basket.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})

const receipt = (order, catalogue) => {
	const totalPrice = catalogue.reduce((total, item) => {
		let itemPrice = 0
		if(order[item.name]) {
			if(item.discount) {
				itemPrice = item.discount.formula(order[item.name], item.price)
				console.log(`${item.name} x ${order[item.name]} : ${itemPrice}p`)
				console.log(item.discount.message)
			}
			else {
				itemPrice = order[item.name]*item.price
				console.log(`${item.name} x ${order[item.name]}: ${itemPrice}p`)
			}
			return total + itemPrice
		}
		return total
	}, 0)
	console.log(`Total price : ${totalPrice}p`)
}

receipt(order, catalogue)
