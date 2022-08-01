import { getSumRef } from "./getSumRef";

describe("getSumRef tests:", () => {
  it("When it is called with 1,2,3 , then return a function with result 6 ", () => {
    const sumRef = getSumRef([1, 2, 3]);

    sumRef((result) => {
      expect(result).toEqual(6);
    });
  });

  it("When it is called with 20,22,100 , then return a function with result 60 ", () => {
    const sumRef = getSumRef([20, 22, 100]);

    sumRef((result) => {
      expect(result).toEqual(60);
    });
  });

  it("When it is called with 21,22,23 , then return a function with result 64", () => {
    const sumRef = getSumRef([21, 22, 23]);

    sumRef((result) => {
      expect(result).toEqual(64);
    });
  });
});
