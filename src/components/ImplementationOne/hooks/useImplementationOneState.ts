import { UseImplementationOneState } from "../models";
import { ChangeEvent, useEffect, useState } from "react";
import { getSumRef } from "../../../utils";
import { changeStringTargets } from "../../../utils/changeStringTargets/changeStringTargets";
import { CODE_SUM_STRING } from "../constants";
import { StringTargetsEnum } from "../../../enums";

const useImplementationOneState: UseImplementationOneState = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [value, setValue] = useState(JSON.stringify(numbers).slice(1, -1));
  const [result, setResult] = useState("");

  const code = changeStringTargets(CODE_SUM_STRING, [
    { match: StringTargetsEnum.TARGET_1, newValue: `${numbers}` },
    { match: StringTargetsEnum.TARGET_2, newValue: result },
  ]);

  const getResult = () => {
    const sumRef = getSumRef(numbers);

    sumRef((result) => setResult(`${result}`));
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const valueMapped = value.split(",").map((value) => Number(value.trim()));
    setValue(value);
    setNumbers(valueMapped);
  };

  useEffect(() => {
    getResult();
  }, [numbers]);

  return {
    value,
    onChange,
    code,
  };
};

export { useImplementationOneState };
