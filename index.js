const receipt = require('receipt')
const roundTo = require('round-to')
const order = require('./order')
const catalogue = require('./catalogue')
const basket = process.argv[2].split(' ')

const printReceipt = (order) => {
	const output = receipt.create([
		{ type: 'center', value: 'MY AWESOME STORE' },
		{ type: 'center', value: 'For Solera Holdings' },
		{ type: 'empty' },
		{ type: 'table', lines: order.items, options: { updateTotal: false } },
		{ type: 'empty' },
		{ type: 'properties', lines: [
				{ name: 'Total amount in £', value: roundTo(order.total / 100, 2).toFixed(2) },
		] },
		{ type: 'empty' }
], { currency: '£' });

	console.log(output)
}

printReceipt(order(basket, catalogue))
