const order = (basket, catalogue) => {
	const order = { items: []}
	const orderedItems = basket.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})

	order.total = catalogue.reduce((total, item) => {
		let itemCost = 0
		const orderQuantity = orderedItems[item.name]
		if(orderQuantity) {
			if(item.discount) {
				const discount = item.discount(orderQuantity, item.price)
				itemCost = discount.cost
				order.items.push(Object.assign({ item: item.name, qty: orderQuantity}, discount))
			}
			else {
				itemCost = orderQuantity*item.price
				order.items.push({ item: item.name, qty: orderQuantity, cost: itemCost })
			}
			return total + itemCost
		}
		return total
	}, 0)

	return order
}

module.exports = order
