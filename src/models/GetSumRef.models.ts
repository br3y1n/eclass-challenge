type CallbackResult = (result: number) => void;
type SumRef = (callback: CallbackResult) => void;
type GetSumRef = (numbers: number[]) => SumRef;

export type { GetSumRef };
