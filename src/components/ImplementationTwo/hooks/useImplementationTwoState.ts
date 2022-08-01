import { UseImplementationTwoState } from "../models";
import { ChangeEvent, useEffect, useState } from "react";
import { changeStringTargets } from "../../../utils/changeStringTargets/changeStringTargets";
import { OrderEnum, StringTargetsEnum, YesOrNoEnum } from "../../../enums";
import { CODE_LIST_NICKNAMES_STRING } from "../constants";
import { SelectChangeEvent } from "@mui/material";
import { MAP_STRING_REF_BY } from "../../../constants";

const useImplementationTwoState: UseImplementationTwoState = () => {
  const [order, setOrder] = useState(OrderEnum.ASC);
  const [omit, setOmit] = useState(YesOrNoEnum.YES);
  const [names, setNames] = useState([
    "Triviño TI",
    "Homer Dev",
    " ",
    " Ragnar Front",
    "Loki UX",
  ]);
  const [value, setValue] = useState(`${names}`);

  const code = changeStringTargets(CODE_LIST_NICKNAMES_STRING, [
    {
      match: StringTargetsEnum.TARGET_1,
      newValue: JSON.stringify(names).slice(1, -1),
    },
    { match: StringTargetsEnum.TARGET_2, newValue: order },
  ]);

  const handleChangeNames = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const handleChangeOrder = ({ target: { value } }: SelectChangeEvent) => {
    setOrder(value as OrderEnum);
  };

  const handleChangeOmit = ({ target: { value } }: SelectChangeEvent) => {
    setOmit(value as YesOrNoEnum);
  };

  useEffect(() => {
    const mapRef = MAP_STRING_REF_BY[omit];
    const valueMapped = value.split(",").map(mapRef);

    setNames(valueMapped);
  }, [value, omit]);

  return {
    value,
    order,
    omit,
    names,
    code,
    handleChangeNames,
    handleChangeOrder,
    handleChangeOmit,
  };
};

export { useImplementationTwoState };
