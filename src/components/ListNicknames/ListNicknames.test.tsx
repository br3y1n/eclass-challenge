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

    expect(li.at(0)).toHaveTextContent("arango");
    expect(li.at(1)).toHaveTextContent("brayan");
    expect(li.at(2)).toHaveTextContent("camilo");
  });

  it("When it is called with DSC order, then the list is rendered in DSC order", () => {
    render(
      <ListNicknames
        names={["camilo", "brayan", "arango"]}
        order={OrderEnum.DSC}
      />
    );

    const li = screen.getAllByRole("listitem");

    expect(li.at(0)).toHaveTextContent("camilo");
    expect(li.at(1)).toHaveTextContent("brayan");
    expect(li.at(2)).toHaveTextContent("arango");
  });
});
