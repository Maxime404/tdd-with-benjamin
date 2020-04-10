import { pikachu } from './pikachu';

test('it return PikaChu when 0 passed as params', () => {
    expect(pikachu(0)).toBe('PikaChu');
});

test('it return Pika when params is divisible by 3 but not by 5', () => {
    expect(pikachu(3)).toBe('Pika');
});

test('it return Chu when params is divisible by 5 but not by 3', () => {
    expect(pikachu(5)).toBe('Chu');
});

test('it return PikaChu when a multiple of 3 and 5 passed on params', () => {
    expect(pikachu(15)).toBe('PikaChu');
    expect(pikachu(30)).toBe('PikaChu');
});

test('it return the params when it is not a multiple of 3 or 5', () => {
    expect(pikachu(2)).toBe(2);
});