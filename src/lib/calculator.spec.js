import { sum } from './calculator';

it('Should sum 2 and 2 and the result must be 4', () => {
  expect.assertions(1);
  expect(sum(2,2)).toBe(4);
});

it('Should sum 2 and 2 and the result must be 4 even if an argument is a string', () => {
  expect.assertions(1);
  expect(sum('2', '2')).toBe(4);
});

it('Should throw an error if an argument is empty', () => {
  expect.assertions(3);
  
  expect(() => {
    sum('', 2)
  }).toThrowError();

  expect(() => {
    sum([], 2)
  }).toThrowError();

  expect(() => {
    sum({})
  }).toThrowError();
})