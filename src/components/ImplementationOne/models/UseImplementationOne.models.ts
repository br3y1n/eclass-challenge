import { ChangeEvent } from "react";

interface UseImplementationOneStateResponse {
  code: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

type UseImplementationOneState = () => UseImplementationOneStateResponse;

export type { UseImplementationOneState };
