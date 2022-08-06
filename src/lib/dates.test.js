import { distributeIntoCumulativeDataRange } from './dates.js';

describe('dates', () => {
  describe('distributeIntoCumulativeDataRange', () => {
    test('Distribute among Sat, Sun, week days not required', () => {
      let diffValue = { a: 2 };
      let interpolated = [
        { date: new Date(2022, 0, 1), a: 0 },
        { date: new Date(2022, 0, 2), a: 0 },
      ];
      distributeIntoCumulativeDataRange(diffValue, interpolated, 'a', false);

      expect(diffValue.a).toBe(0);
      expect(interpolated[0].a).toBe(1);
      expect(interpolated[1].a).toBe(2);
    });

    test('Distribute among Sat, Sun, week days REQUIRED', () => {
      let diffValue = { a: 2 };
      let interpolated = [
        { date: new Date(2022, 0, 1), a: 0 },
        { date: new Date(2022, 0, 2), a: 0 },
      ];
      distributeIntoCumulativeDataRange(diffValue, interpolated, 'a', true);

      expect(diffValue.a).toBe(0);
      expect(interpolated[0].a).toBe(1);
      expect(interpolated[1].a).toBe(2);
    });

    test('Distribute among Fri, Sat, Sun, week days REQUIRED', () => {
      let diffValue = { a: 2 };
      let interpolated = [
        { date: new Date(2021, 11, 31), a: 0 },
        { date: new Date(2022, 0, 1), a: 0 },
        { date: new Date(2022, 0, 2), a: 0 },
      ];
      distributeIntoCumulativeDataRange(diffValue, interpolated, 'a', true);

      expect(diffValue.a).toBe(0);
      expect(interpolated[0].a).toBe(2);
      expect(interpolated[1].a).toBe(2);
    });
  });
});
