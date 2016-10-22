const discount = (count, price) => {
	const quotient = Math.floor(count/3);
	const remainder = count%3;
	const discount = quotient*price
	const subTotal = count*price
	const total = subTotal - discount
	if (quotient > 0) {
		return { cost: total, discount: {
			type: 'message',
			value: 'three for the price of two'
		}}
	}
	return { cost: total }
}

module.exports = discount
