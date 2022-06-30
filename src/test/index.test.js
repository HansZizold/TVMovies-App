const Counter = require('../modules/__mocks__/counter.js');

const counter = new Counter();
const data = [];
const dataA = [
  { item_id: 31910, username: 'Justina', comment: 'Working the part' },
  { item_id: 56500, username: 'Augustina', comment: 'Of the Just' },
];

const item1 = { item_id: 88849, username: 'jon', comment: 'good' };

describe('The number of comments for null data', () => {
  test('Null data', () => {
    expect(counter.showCount(data)).toBeFalsy();
  });
});

describe('Show counter for true data for comments', () => {
    test('Data with 2 items', () => {
      expect(counter.showCount(dataA)).toBe(2);
    });
  });