import { calculatePrice } from './pricer';

describe('Pricer', () => {
  describe('Given an item price, a quantity and a tax percentage', () => {
    describe('When the total price is less than 1000 €', () => {
      test.each([
        {
          quantity: 3,
          itemPrice: 1.21,
          taxPercentage: 0,
          expectedPrice: '3.63 €',
        },
        {
          quantity: 3,
          itemPrice: 1.21,
          taxPercentage: 5,
          expectedPrice: '3.81 €',
        },
        {
          quantity: 3,
          itemPrice: 1.21,
          taxPercentage: 20,
          expectedPrice: '4.36 €',
        },
      ])(
        'Then $quantity items at $itemPrice with a tax of $taxPercentage should return $expectedPrice',
        ({ quantity, itemPrice, expectedPrice, taxPercentage }) => {
          const price = calculatePrice(quantity, itemPrice, taxPercentage);
          expect(price).toBe(expectedPrice);
        }
      );
    });
    describe('When the total price is between 1000 € and 4999 €', () => {
      test.each([
        {
          quantity: 5,
          itemPrice: 345,
          taxPercentage: 10,
          expectedPrice: '1840.58 €',
        },
      ])(
        'Then $quantity items at $itemPrice with a tax of $taxPercentage should return $expectedPrice',
        ({ quantity, itemPrice, expectedPrice, taxPercentage }) => {
          const price = calculatePrice(quantity, itemPrice, taxPercentage);
          expect(price).toBe(expectedPrice);
        }
      );
    });
    describe('When the total price is more than 4999 €', () => {
      test.each([
        {
          quantity: 5,
          itemPrice: 1299,
          taxPercentage: 10,
          expectedPrice: '6787.28 €',
        },
      ])(
        'Then $quantity items at $itemPrice with a tax of $taxPercentage should return $expectedPrice',
        ({ quantity, itemPrice, expectedPrice, taxPercentage }) => {
          const price = calculatePrice(quantity, itemPrice, taxPercentage);
          expect(price).toBe(expectedPrice);
        }
      );
    });
  });
});
