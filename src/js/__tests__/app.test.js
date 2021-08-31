import { getHealth as appGetHealth } from '../app.js';

test('should check health = 60', () => {
  const testHero = { name: 'Маг', health: 60 };

  const expected = 'healthy';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});

test('should check health = 50', () => {
  const testHero = { name: 'Маг', health: 50 };

  const expected = 'healthy';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});

test('should check health = 35', () => {
  const testHero = { name: 'Маг', health: 35 };

  const expected = 'wounded';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});

test('should check health = 15', () => {
  const testHero = { name: 'Маг', health: 15 };

  const expected = 'wounded';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});

test('should check health = 10', () => {
  const testHero = { name: 'Маг', health: 10 };

  const expected = 'critical';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});

test('should check health = 1', () => {
  const testHero = { name: 'Маг', health: 1 };

  const expected = 'critical';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});

test('should check health = 0', () => {
  const testHero = { name: 'Маг', health: 0 };

  const expected = 'dead';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});

test('should check health = -10', () => {
  const testHero = { name: 'Маг', health: -10 };

  const expected = 'dead';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});
