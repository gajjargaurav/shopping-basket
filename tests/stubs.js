const stub = {
	simple: {
		basket:['apples', 'apples', 'oranges', 'papayas', 'apples' ],
		order: {
			items: [
				{ item: 'apples', cost: 75, qty:3 },
				{ item: 'oranges', cost: 30, qty:1 },
				{ item: 'papayas', cost: 50, qty:1 }
			],
			total: 155
		}
	}
}

module.exports = stub
