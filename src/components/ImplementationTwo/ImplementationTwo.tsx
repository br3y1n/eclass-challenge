import {
    Box,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import PreviewCode from "../PreviewCode/PreviewCode";
import ListNicknames from "../ListNicknames/ListNicknames";
import { FC } from "react";
import { useImplementationTwoState } from "./hooks/useImplementationTwoState";
import { OrderEnum, YesOrNoEnum } from "../../enums";
import { implementationTwoStyles } from "./ImplementationTwo.styles";

const ImplementationTwo: FC = () => {
  const {
    value,
    order,
    omit,
    names,
    code,
    handleChangeNames,
    handleChangeOrder,
    handleChangeOmit,
  } = useImplementationTwoState();

  return (
    <>
      <Grid container columnSpacing={3}>
        <Grid container item xs={12}>
          <TextField
            variant="outlined"
            label="Names"
            placeholder="Enter names"
            value={value}
            onChange={handleChangeNames}
            sx={implementationTwoStyles.input}
          />
        </Grid>

        <Grid container item xs={6}>
          <FormControl sx={implementationTwoStyles.select}>
            <InputLabel>Order</InputLabel>
            <Select
              value={order}
              label="Order"
              onChange={handleChangeOrder}
              variant={"outlined"}
            >
              {Object.values(OrderEnum).map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid container item xs={6}>
          <FormControl sx={implementationTwoStyles.select}>
            <InputLabel>Omit spaces?</InputLabel>
            <Select
              value={omit}
              label="Omit spaces?"
              onChange={handleChangeOmit}
              variant={"outlined"}
            >
              {Object.values(YesOrNoEnum).map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <PreviewCode code={code} />

        <Box sx={implementationTwoStyles.listContainer}>
            <ListNicknames names={names} order={order} />
        </Box>

    </>
  );
};

export default ImplementationTwo;
