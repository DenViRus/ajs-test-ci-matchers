import { sortByHealth as appSortByHealth } from '../app.js';

test('should check sort array', () => {
  const friends = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = appSortByHealth(friends);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('should check sort reverse array', () => {
  const friends = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  const received = appSortByHealth(friends);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('should check array with deadman', () => {
  const friends = [
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = appSortByHealth(friends);

  const expected = [
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 0 },
  ];
  expect(received).toEqual(expected);
});

test('should check big array', () => {
  const friends = [
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 120 },
    { name: 'кавалерист', health: 200 },
    { name: 'мечник', health: 10 },
    { name: 'рыцарь', health: 150 },
    { name: 'арбалетчик', health: 50 },
  ];

  const received = appSortByHealth(friends);

  const expected = [
    { name: 'кавалерист', health: 200 },
    { name: 'рыцарь', health: 150 },
    { name: 'маг', health: 120 },
    { name: 'лучник', health: 80 },
    { name: 'арбалетчик', health: 50 },
    { name: 'мечник', health: 10 },
  ];
  expect(received).toEqual(expected);
});

test('should check array with repeated', () => {
  const friends = [
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 120 },
    { name: 'кавалерист', health: 200 },
    { name: 'мечник', health: 100 },
    { name: 'рыцарь', health: 150 },
    { name: 'арбалетчик', health: 100 },
  ];

  const received = appSortByHealth(friends);

  const expected = [
    { name: 'кавалерист', health: 200 },
    { name: 'рыцарь', health: 150 },
    { name: 'маг', health: 120 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 100 },
    { name: 'арбалетчик', health: 100 },
  ];
  expect(received).toEqual(expected);
});

test('should check array with same', () => {
  const friends = [
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'кавалерист', health: 100 },
    { name: 'мечник', health: 100 },
    { name: 'рыцарь', health: 100 },
    { name: 'арбалетчик', health: 100 },
  ];

  const received = appSortByHealth(friends);

  const expected = [
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'кавалерист', health: 100 },
    { name: 'мечник', health: 100 },
    { name: 'рыцарь', health: 100 },
    { name: 'арбалетчик', health: 100 },
  ];
  expect(received).toEqual(expected);
});
