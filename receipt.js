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

module.exports = receipt
