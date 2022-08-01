import Loading from "../../components/Loading/Loading";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { detailsStyles } from "./Details.styles";
import { useDetailsState } from "./hooks/useDetailsState";

const Img = styled("img")({});

const Details = () => {
  const { loading, character, characterMapped } = useDetailsState();

  return (
    <>
      <Typography variant={"h1"}>Details</Typography>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Img
            src={character!.image}
            sx={detailsStyles.img}
            alt={character!.name}
          />

          <Table sx={detailsStyles.table}>
            <TableBody>
              {characterMapped.map(([key, value], index) => (
                <TableRow key={index}>
                  <TableCell sx={detailsStyles.key}>{key}</TableCell>
                  <TableCell sx={detailsStyles.value}>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};

export default Details;
