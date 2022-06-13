import { queryString, parse } from './queryString';

describe('QueryString method', () => {
  it('should create a valid query string when an object is passed', () => {
    expect.assertions(1);

    const obj = {
      name: 'Yago',
      profession: 'developer',
    }
    expect(queryString(obj)).toBe('name=Yago&profession=developer');
  });
  it('should create a new valid query string when an object is passed', () => {
    expect.assertions(1);

    const obj = {
      name: 'Yago',
      courses: ['JS', 'TDD'],
    }
    expect(queryString(obj)).toBe('name=Yago&courses=JS,TDD');
  });
  it('should throw an error if some argument is invalid', () => {
    expect.assertions(1);

    const obj = {
      name: 'Yago',
      courses: {
        first: 'JS',
        second: 'TDD',
      },
    }
    expect(() => {
      queryString(obj)
    }).toThrowError();
  });
});

describe('Parse querystring to object', () => {
  it('Should parse the querystring to object', () => {
    const qs = 'name=Yago&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Yago',
      profession: 'developer',
    })
  });
  it('Should parse the a single key-value querystring to object', () => {
    const qs = 'name=Yago';
    expect(parse(qs)).toEqual({
      name: 'Yago',
    })
  });
  it('Should parse the a querystring to object taking care of comma separator', () => {
    const qs = 'name=Yago&abilities=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Yago',
      abilities: ['JS', 'TDD'],
    })
  });
});