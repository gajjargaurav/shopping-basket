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

module.exports = discount
