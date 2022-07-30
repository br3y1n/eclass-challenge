import { FC } from "react";
import { ListNicknamesProps } from "./models";
import { useListNicknamesState } from "./hooks/useListNicknamesState";

const ListNicknames: FC<ListNicknamesProps> = (props) => {
  const { orderedNames } = useListNicknamesState(props);

  return (
    <ul>
      {orderedNames.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default ListNicknames;
