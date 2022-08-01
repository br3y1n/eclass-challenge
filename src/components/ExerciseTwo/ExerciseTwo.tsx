import { FC } from "react";
import ExerciseTemplate from "../ExerciseTemplate/ExerciseTemplate";
import ImplementationTwo from "../ImplementationTwo/ImplementationTwo";
import { RepositoriesEnum } from "../../enums";

const ExerciseTwo: FC = () => (
  <ExerciseTemplate
    title="Exercise 2 / Demo."
    description={`For the following demonstration enter "only" names separated by ",", select the order (ASC, DSC) and select omit spaces, to see the ordered list below.`}
    url={RepositoriesEnum.LIST_NICKNAMES}
    implementation={<ImplementationTwo />}
  />
);

export default ExerciseTwo;
