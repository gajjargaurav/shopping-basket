const order = (basket, catalogue) => {
	const order = { items: []}
	const orderedItems = basket.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})

	for (const orderedItem in orderedItems) {
		const item = { item: orderedItem, qty: orderedItems[orderedItem] }
		const product = catalogue.find(p => p.name === orderedItem)

		if(!product) {
			throw new Error('Product Not found in Catalogue')
		}
		order.items.push(
			Object.assign(
				item,
				product.discount ?
				product.discount(item.qty, product.price) :
				{ cost: product.price*item.qty }
			)
		)
	}
	if(order.items.length === 0) {
		throw new Error('Basket is empty')
	}
	order.total = order.items.reduce((sum, curr) => (sum + curr.cost), 0)

	return order
}

module.exports = order
