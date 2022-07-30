import { StringTargetsEnum } from "../../../enums";

const CODE_SUM_STRING = `import { getSumRef } from "../../utils"

const sumRef = getSumRef([${StringTargetsEnum.TARGET_1}])

sumRef(console.log) // out -> ${StringTargetsEnum.TARGET_2}
`;

export { CODE_SUM_STRING };
