const SimpleClass = require('./SimpleClass.js');

jest.mock('./SimpleClass');

describe('Mocking accessors', () => {
  it('can mock an instance setter', () => {
    const instance = new SimpleClass();
    const mockTestSetter = jest
      .spyOn(instance, 'testSetter', 'set')
      .mockImplementation((_v) => {
        return () => {};
      });

    testClassInstance.testSetter = '';

    expect(mockTestSetter).toHaveBeenCalledTimes(1);
  });

  it('can mock an instance getter', () => {
    const instance = new SimpleClass();
    const mockTestGetter = jest
      .spyOn(instance, 'testGetter', 'get')
      .mockReturnValue('mockedTestGetter');

    expect(mockTestGetter).toHaveBeenCalledTimes(1);
  });

  it('can mock an instance method', () => {
    const instance = new SimpleClass();
    const mockTestMethod = jest
      .spyOn(instance, 'testMethod')
      .mockReturnValue('mockedTestMethod');

    expect(instance.testMethod()).toEqual('mockedTestMethod');
    expect(mockTestMethod).toHaveBeenCalledTimes(1);
  })
});
