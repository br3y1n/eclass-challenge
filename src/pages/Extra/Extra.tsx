import { Link, Typography } from "@mui/material";
import { RepositoriesEnum } from "../../enums/repositories.enums";

const Extra = () => {
  return (
    <>
      <Typography variant={"h1"}>Extra</Typography>

      <Typography variant={"h3"}>Exercise 1 / Demo.</Typography>
      <Typography variant={"body1"}>
        You can see the solution{" "}
        <Link href={RepositoriesEnum.SUM} target={"_blank"}>
          here
        </Link>
        .
      </Typography>

      <Typography variant={"h3"}>Exercise 2 / Demo.</Typography>
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
