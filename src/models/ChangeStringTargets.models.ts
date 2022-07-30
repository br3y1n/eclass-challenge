import { StringMatchers } from "./StringMatchers.models";

type ChangeStringTargets = (
  chain: string,
  matchers: StringMatchers[]
) => string;

export type { ChangeStringTargets };
