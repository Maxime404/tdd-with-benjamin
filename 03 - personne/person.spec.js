import { Person } from './Person'

describe('Person', () => {
    const zgen = new Person("Kilian", "Trash", 8, 1);
    const majdi = new Person("Majdi", "Toumi", 34, 100);

    test('it say Hello fullname', () => {
        expect(zgen.helloFullName()).toBe('Hello Kilian Trash');
        expect(majdi.helloFullName()).toBe('Hello Majdi Toumi');
    });

    test('it return true if the person is older than 18 years, or, return false', () => {
        expect(zgen.canDrink()).toBe(false);
        expect(majdi.canDrink()).toBe(true);
    });

    test('it return true if person have enough cash to buy, or, return false', () => {
        expect(zgen.canBuy(5)).toBe(false);
        expect(majdi.canBuy(5)).toBe(true);
    });

    test('it buy and return the rest or an error if the person have not enough cash to by', () => {
        expect(zgen.buy(1)).toBe(0);
        expect(() => { zgen.buy(1) }).toThrow("You can't buy this! You are 1€ short!");
        expect(majdi.buy(5)).toBe(95);
        expect(() => { majdi.buy(100) }).toThrow("You can't buy this! You are 5€ short!");
    });
});
