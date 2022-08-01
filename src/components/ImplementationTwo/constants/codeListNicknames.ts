import { StringTargetsEnum } from "../../../enums";

const CODE_LIST_NICKNAMES_STRING = `import ListNicknames from "../../components/ListNicknames/ListNicknames";
import { OrderEnum } from "../../enums";

<ListNicknames 
    names={[${StringTargetsEnum.TARGET_1}]} 
    order={OrderEnum.${StringTargetsEnum.TARGET_2}}
 />
`;

export { CODE_LIST_NICKNAMES_STRING };
