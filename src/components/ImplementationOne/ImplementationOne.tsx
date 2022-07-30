import { TextField } from "@mui/material";
import PreviewCode from "../PreviewCode/PreviewCode";
import { FC } from "react";
import { useImplementationOneState } from "./hooks/useImplementationOneState";
import { implementationOneStyles } from "./ImplementationOne.styles";

const ImplementationOne: FC = () => {
  const { value, onChange, code } = useImplementationOneState();

  return (
    <>
      <TextField
        variant="outlined"
        label="Numbers"
        placeholder="Enter numbers"
        value={value}
        onChange={onChange}
        sx={implementationOneStyles.input}
      />

      <PreviewCode code={code} />
    </>
  );
};

export default ImplementationOne;
