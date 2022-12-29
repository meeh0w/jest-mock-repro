module.exports = class SimpleClass {
  testMethod() {
    return 'testMethod';
  }

  get testGetter() {
    return 'test';
  }

  set testSetter(_v) {
    return;
  }
}
