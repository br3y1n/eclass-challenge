import ExerciseTemplate from "../ExerciseTemplate/ExerciseTemplate";
import ImplementationTwo from "../ImplementationTwo/ImplementationTwo";
import { FC } from "react";
import { RepositoriesEnum } from "../../enums";

const ExerciseTwo: FC = () => (
  <ExerciseTemplate
    title="Exercise 2 / Demo."
    description={`For the following demonstration enter "only" strings separated by "," and select the order (ASC, DSC), to see the ordered list below.`}
    url={RepositoriesEnum.LIST_NICKNAMES}
    implementation={<ImplementationTwo />}
  />
);

export default ExerciseTwo;
