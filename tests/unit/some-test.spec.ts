import { cat } from '../../src';

describe('plus', function () {
  it('should equal 2 for 1 plus 1', function () {
    const expectedResult = 2;
    expect(1 + 1).toEqual(expectedResult);
  });
  it('cat should say meow', function () {
    expect(cat).toHaveProperty('say', 'meow');
  });
});
