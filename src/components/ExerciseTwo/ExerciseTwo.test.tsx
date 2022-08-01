import { render, screen } from "@testing-library/react";
import ExerciseTwo from "./ExerciseTwo";

describe("ExerciseTwo tests:", () => {
  it("When it is called, then Exercise 2 is rendered", () => {
    render(<ExerciseTwo />);

    const title = screen.getByRole("heading", {
      level: 3,
      name: "Exercise 2 / Demo.",
    });

    expect(title).toBeInTheDocument();
  });
});
