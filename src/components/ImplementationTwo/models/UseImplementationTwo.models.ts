import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import { OrderEnum, YesOrNoEnum } from "../../../enums";

interface UseImplementationTwoStateResponse {
  code: string;
  order: OrderEnum;
  omit: YesOrNoEnum;
  names: string[];
  value: string;
  handleChangeNames: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeOrder: (event: SelectChangeEvent) => void;
  handleChangeOmit: (event: SelectChangeEvent) => void;
}

type UseImplementationTwoState = () => UseImplementationTwoStateResponse;

export type { UseImplementationTwoState, UseImplementationTwoStateResponse };
