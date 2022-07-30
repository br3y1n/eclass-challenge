import { FC } from "react";
import ExerciseTemplate from "../ExerciseTemplate/ExerciseTemplate";
import { RepositoriesEnum } from "../../enums";
import ImplementationOne from "../ImplementationOne/ImplementationOne";

const ExerciseOne: FC = () => (
  <ExerciseTemplate
    title="Exercise 1 / Demo."
    description={`For the following demonstration enter "only" numbers separated by "," and press the result button to see it in the code preview below ("out").`}
    url={RepositoriesEnum.SUM}
    implementation={<ImplementationOne />}
  />
);

export default ExerciseOne;
