# Shopping Basket Test

Write a simple program that calculates the price of a shopping basket.

Items are presented one at a time, in a list, identified by name -for example "Apple" or "Banana".

The basket can contain any item multiple times.

Items are priced as follows:
* Apples are 25p each
* Oranges are 30p each
* Garlic are 15p each
* Papayas are 50p each, but are available as ‘three for the price of two’

Given a list of shopping, calculate the total cost of those items.The output should be displayed similar to what you would expect to see on a receipt.

## How to Run the program

The program depends on receiving the basket so that is the only input parameter required to run it.
e.g.

Run the following command in terminal

`node index.js 'apples oranges papayas'`

## Run Tests

To run tests simply execute

`npm test`

## Notes

The solution uses a third party module
 [Receipt](https://github.com/MartyWallace/Receipt) to generate the desired output but it needed some tweaks to fit the requirements so [a fork of it](https://github.com/gajjargaurav/Receipt) was used to complete the solution

 [PRs](https://github.com/MartyWallace/Receipt/pulls) have been made to the original Repo but sometimes that takes time so the fork is directly referenced for time being.
