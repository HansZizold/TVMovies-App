jest.mock('./show.js');
const Counter = require('./__mocks__/counter.js');

const counter = new Counter();
const nullData = [];
const dataA = [
  { item_id: 88849, username: 'jon', comment: 'happy' },
  { item_id: 88849, username: 'jon', comment: 'happy' },
];

describe('Show counter for for the number of movies', () => {
  test('Data with 2 movies', () => {
    expect(counter.showCounter(dataA)).toBe(2);
  });
});

describe('Test counter for homepage items', () => {
  test('Item counter for true data', () => {
    expect(counter.addCounter(dataA)).toBe(2);
  });
  test('Item counter for empty data', () => {
    expect(counter.addCounter(nullData)).toBe(null);
  });
});
