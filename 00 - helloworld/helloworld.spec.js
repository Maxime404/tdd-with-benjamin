import { helloWorld } from './helloWorld';

test('when no params, say Hello, World', () => {
  expect(helloWorld()).toBe('Hello, World');
});

describe('With name', () => {
  test('says somethings special when receiving Majdi as params', () => {
    expect(helloWorld('Majdi')).toBe('Yooooo!');
  });

  test('says Hello, Ben when passed Ben as params', () => {
    expect(helloWorld('Ben')).toBe('Hello, Ben');
  });
})

test('it retrurn false when params is not a string', () => {
  expect(helloWorld({ name: 'Ben'})).toBe(false);
});