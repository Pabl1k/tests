import {multiply, splitIntoWords, sum} from "./01";

//данные
let a: number;
let b: number;
let c: number;

beforeEach( () => { //перезатирает перед началом каждого теста
  a = 1;
  b = 2;
  c = 3;
})

test('sum should be correct', () => {
  //действия
  const result1 = sum(a,b);
  const result2 = sum(c,b);

  //ожидание результата
  expect(result1).toBe(3);
  expect(result2).toBe(5);

})

test('multiply should be correct', () => {
  //действия
  const resultM1 = multiply(a, b);
  const resultM2 = multiply(b, c);
  //ожидание результата
  expect(resultM1).toBe(2);
  expect(resultM2).toBe(6);
})

test('split into words must be correct', () => {
  // data
  const sent1 = 'Hello my friends';
  const sent2 = 'JS - the best  programming language';
  // action
  const result1 = splitIntoWords(sent1);
  const result2 = splitIntoWords(sent2);
  //expected result
  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('hello');
  expect(result1[1]).toBe('my');
  expect(result1[2]).toBe('friends');

  expect(result2.length).toBe(5);
  expect(result2[0]).toBe('js');
  expect(result2[1]).toBe('the');
  expect(result2[2]).toBe('best');
  expect(result2[3]).toBe('programming');
  expect(result2[4]).toBe('language');
})
