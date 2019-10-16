const wordPattern = require("./index");

test("Word Pattern is a function", () => {
  expect(typeof wordPattern).toEqual("function");
});

test('pattern = "abba", str = "dog cat cat dog" should return true', () => {
  expect(wordPattern("abba", "dog cat cat dog")).toBeTruthy();
});

test('pattern = "aaaa", str = "dog dog dog dog" should return true', () => {
  expect(wordPattern("aaaa", "dog dog dog dog")).toBeTruthy();
});

test('pattern = "aaaa", str = "dog dog cat cat" should return true', () => {
  expect(wordPattern("aabb", "dog dog cat cat")).toBeTruthy();
});

test('pattern = "abba", str = "dog cat cat fish" should return false', () => {
  expect(wordPattern("abba", "dog cat cat fish")).toBeFalsy();
});

test('pattern = "aaaa", str = "dog cat cat dog" should return false', () => {
  expect(wordPattern("aaaa", "dog cat cat dog")).toBeFalsy();
});

test('pattern = "abba", str = "dog dog dog dog" should return false', () => {
  expect(wordPattern("abba", "dog dog dog dog")).toBeFalsy();
});
