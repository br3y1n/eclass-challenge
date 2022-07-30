import { GetSumRef } from "../../models";

const getSumRef: GetSumRef = (numbers) => {
  const result = numbers.reduce((currentValue, nextNumber) => {
    const isPair = nextNumber % 2 === 0;
    const isHigher = nextNumber > 20;
    const newNumber = isPair && isHigher ? 20 : nextNumber;

    return currentValue + newNumber;
  }, 0);

  return (callback) => {
    callback(result);
  };
};

export { getSumRef };
