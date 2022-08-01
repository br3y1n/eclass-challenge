import { render, screen } from "@testing-library/react";
import ListNicknames from "./ListNicknames";
import { OrderEnum } from "../../enums";

describe("ListNicknames tests:", () => {
  it("When it is called with ASC order, then the list is rendered in ASC order", () => {
    render(
      <ListNicknames
        names={["camilo", "brayan", "arango"]}
        order={OrderEnum.ASC}
      />
    );

    const li = screen.getAllByRole("listitem");
    const list = li.map((item) => item.textContent);

    expect(list).toEqual(["arango", "brayan", "camilo"]);
  });

  it("When it is called with DSC order, then the list is rendered in DSC order", () => {
    render(
      <ListNicknames
        names={["camilo", "brayan", "arango"]}
        order={OrderEnum.DSC}
      />
    );

    const li = screen.getAllByRole("listitem");

    const list = li.map((item) => item.textContent);

    expect(list).toEqual(["camilo", "brayan", "arango"]);
  });
});
