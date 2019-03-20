import { sum, collegueNum } from '../src/js/app';

test('have 5 item', () => {
  const result = collegueNum;
  expect(result).toHaveLength(5);
});
test('array?', () => {
  const result = collegueNum;
  expect(result).not.toHaveLength(0);
});
