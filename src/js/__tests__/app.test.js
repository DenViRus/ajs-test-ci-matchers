import { getHealth as appGetHealth } from '../app.js';

test('should check health = 60', () => {
  const testHero = { name: 'Маг', health: 60 };

  const expected = 'healthy';

  const received = appGetHealth(testHero);

  expect(received).toBe(expected);
});
