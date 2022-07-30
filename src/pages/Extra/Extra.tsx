import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { RepositoriesEnum } from "../../enums/repositories.enums";
import PreviewCode from "../../components/PreviewCode/PreviewCode";
import { CODE_SUM_STRING } from "./constants";
import { CODE_LIST_NICKNAMES_STRING } from "./constants/codeListNicknames";
import ListNicknames from "../../components/ListNicknames/ListNicknames";
import { OrderEnum, StringTargetsEnum } from "../../enums";
import { ChangeEvent, useEffect, useState } from "react";
import { charactersStyles } from "../Characters/Characters.styles";
import { getSumRef } from "../../utils";
import { changeStringTargets } from "../../utils/changeStringTargets/changeStringTargets";

const Extra = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [inputValue, setInputValue] = useState(
    JSON.stringify(numbers).slice(1, -1)
  );
  const [result, setResult] = useState("");

  const [order, setOrder] = useState(OrderEnum.ASC);

  const [names, setNames] = useState([
    "Triviño TI",
    "Homer Dev",
    " ",
    " Ragnar Front",
    "Loki UX",
  ]);
  const [inputNames, setInputNames] = useState(
    JSON.stringify(names).slice(1, -1)
  );

  const handleChangeSum = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const valueMapped = value.split(",").map((value) => Number(value.trim()));
    setInputValue(value);
    setNumbers(valueMapped);
  };

  const handleChangeOrder = ({ target: { value } }: SelectChangeEvent) => {
    setOrder(value as OrderEnum);
  };

  const getResult = () => {
    const sumRef = getSumRef(numbers);
    sumRef((result) => setResult(`${result}`));
  };

  useEffect(() => {
    getResult();
  }, []);

  const CODE_SUM = changeStringTargets(CODE_SUM_STRING, [
    { match: StringTargetsEnum.TARGET_1, newValue: `${numbers}` },
    { match: StringTargetsEnum.TARGET_2, newValue: result },
  ]);

  const CODE_LIST_NICKNAMES = changeStringTargets(CODE_LIST_NICKNAMES_STRING, [
    { match: StringTargetsEnum.TARGET_1, newValue: `${names}` },
    { match: StringTargetsEnum.TARGET_2, newValue: order },
  ]);

  return (
    <>
      <Typography variant={"h1"}>Extra</Typography>

      <Typography variant={"h3"}>Exercise 1 / Demo.</Typography>
      <Typography variant={"body1"}>
        For the following demonstration enter "only" numbers separated by ","
        and press the result button to see it in the code preview below ("out").
      </Typography>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          variant="outlined"
          label="numbers"
          placeholder="Filter by name"
          sx={charactersStyles.input}
          value={inputValue}
          onChange={handleChangeSum}
        />

        <Button onClick={getResult} variant={"outlined"} color={"secondary"}>
          Result
        </Button>
      </Box>

      <PreviewCode code={CODE_SUM} />

      <Typography variant={"body1"}>
        You can see the solution{" "}
        <Link href={RepositoriesEnum.SUM} target={"_blank"}>
          here
        </Link>
        .
      </Typography>

      <Typography variant={"h3"}>Exercise 2 / Demo.</Typography>

      <Typography variant={"body1"}>
        For the following demonstration enter "only" strings separated by ","
        and select the order (ASC, DSC), to see the ordered list below.
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          variant="outlined"
          label="numbers"
          placeholder="Filter by name"
          sx={charactersStyles.input}
          value={inputNames}
          onChange={handleChangeSum}
        />

        <FormControl>
          <InputLabel>Order</InputLabel>
          <Select
            value={order}
            label="Order"
            onChange={handleChangeOrder}
            variant={"outlined"}
            color={"secondary"}
          >
            {Object.values(OrderEnum).map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <PreviewCode code={CODE_LIST_NICKNAMES} />
      <ListNicknames names={names} order={order} />

      <Typography variant={"body1"}>
        You can see the solution{" "}
        <Link href={RepositoriesEnum.LIST_NICKNAMES} target={"_blank"}>
          here
        </Link>
        .
      </Typography>
    </>
  );
};

export default Extra;
