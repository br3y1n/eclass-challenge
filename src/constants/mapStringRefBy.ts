import { YesOrNoEnum } from "../enums";
import { MapStringCallback } from "../models";

const MAP_STRING_REF_BY: Record<YesOrNoEnum, MapStringCallback> = {
  [YesOrNoEnum.NO]: (value) => value,
  [YesOrNoEnum.YES]: (value) => value.trim(),
};

export { MAP_STRING_REF_BY };
