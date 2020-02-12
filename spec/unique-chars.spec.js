const funcs = require('../unique-chars');

describe("funcs.unique", function () {
  it("should return true for empty", function () {
    expect(funcs.unique('')).toBeTrue();
  });

  it("should return true for 'abcde'", function () {
    expect(funcs.unique('abcde')).toBeTrue();
  });

  it("should return true for 'aAbBcC'", function () {
    expect(funcs.unique('aAbBcC')).toBeTrue();
  });

  it("should return true for '12345", function () {
    expect(funcs.unique('12345')).toBeTrue();
  });

  it("should return false for 'abcda", function () {
    expect(funcs.unique('abcda')).toBeFalse();
  });
});

describe("funcs.uniqueNoStruct", function () {
  it("should return true for empty", function () {
    expect(funcs.uniqueNoStruct('')).toBeTrue();
  });

  it("should return true for 'abcde", function () {
    expect(funcs.uniqueNoStruct('abcde')).toBeTrue();
  });

  it("should return true for 'aAbBcC'", function () {
    expect(funcs.uniqueNoStruct('aAbBcC')).toBeTrue();
  });

  it("should return true for '12345", function () {
    expect(funcs.uniqueNoStruct('12345')).toBeTrue();
  });

  it("should return false for 'abcda", function () {
    expect(funcs.uniqueNoStruct('abcda')).toBeFalse();
  });
});
