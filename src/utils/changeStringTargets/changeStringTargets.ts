import { ChangeStringTargets } from "../../models";

const changeStringTargets: ChangeStringTargets = (chain, matchers) => {
  const newChain = matchers.reduce(
    (currentChain, { match, newValue }) =>
      currentChain.replace(match, newValue),
    chain
  );

  return newChain;
};

export { changeStringTargets };
