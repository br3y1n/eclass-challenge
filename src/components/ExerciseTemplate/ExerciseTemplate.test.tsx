import { render, screen } from "@testing-library/react";
import ExerciseTemplate from "./ExerciseTemplate";

describe("ExerciseOne tests:", () => {
  beforeEach(() => {
    render(
      <ExerciseTemplate
        title={"title test"}
        url={"testUrl"}
        implementation={<img alt={"img test"} />}
        description={"description"}
      />
    );
  });

  it("When it is called, then title test is rendered", () => {
    const title = screen.getByRole("heading", {
      level: 3,
      name: "title test",
    });

    expect(title).toBeInTheDocument();
  });

  it("When it is called, then description is rendered", () => {
    const description = screen.getByText(/description/);

    expect(description).toBeInTheDocument();
  });

  it("When it is called, then implementation is rendered", () => {
    const implementation = screen.getByAltText("img test");

    expect(implementation).toBeInTheDocument();
  });
});
