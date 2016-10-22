const order = (basket, catalogue) => {
	const order = { items: []}
	const orderedItems = basket.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})

	order.total = catalogue.reduce((total, item) => {
		let itemPrice = 0
		if(orderedItems[item.name]) {
			if(item.discount) {
				const discount = item.discount(orderedItems[item.name], item.price)
				itemPrice = discount.price
				order.items.push(Object.assign({ name: item.name}, discount))
			}
			else {
				itemPrice = orderedItems[item.name]*item.price
				order.items.push({ name: item.name, price: itemPrice })
			}
			return total + itemPrice
		}
		return total
	}, 0)

	return order
}

module.exports = order
