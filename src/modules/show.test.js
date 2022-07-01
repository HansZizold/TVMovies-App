import show from './show.js';
import baseURL from './api.js';

jest.mock('./show.js');

// arrange
const query = 'boys';
const URL = `${baseURL.API}${query}`;

// act
const boysCount = show(URL);

// assert
describe('Show Counter', () => {
  test('verify that the number of shows with boys category is 10', () => {
    expect(boysCount).toBe(10);
  });
});
