import { Order } from './Order';

describe('Order', () => {
    const order = new Order([{ price: 5, quantity: 6 }, { price: 10.4, quantity: 1 }]);

    test('it return the total of quantity of the order', () => {
        expect(order.totalQuantity()).toBe(7);
    });

    test('it return the total product number of the order', () => {
        expect(order.productsCount()).toBe(2);
    });

    test('it return the price in cent of the total product of the order', () => {
        expect(order.priceInCents()).toBe(4040);
    });

    test('it return the price in euro (with two decimals and euro symbole) of the total product of the order', () => {
        expect(order.priceInEuros()).toBe('40,40€');
    });
});