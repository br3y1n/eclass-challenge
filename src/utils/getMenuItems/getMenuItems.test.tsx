import { getMenuItems } from "./getMenuItems";
import { MENU_ITEMS } from "../../components/Header/constants";
import React from "react";

describe("getMenuItems tests:", () => {
  it("When it is called with mobile true , then MENU_ITEMS.mobile is returned", () => {
    expect(getMenuItems(true)).toEqual(MENU_ITEMS.mobile);
  });

  it("When it is called with mobile false , then MENU_ITEMS.desktop is returned", () => {
    expect(getMenuItems(false)).toEqual(MENU_ITEMS.desktop);
  });
});
