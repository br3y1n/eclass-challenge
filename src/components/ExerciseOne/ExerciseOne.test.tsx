import { render, screen } from "@testing-library/react";
import ExerciseOne from "./ExerciseOne";

describe("ExerciseOne tests:", () => {
  it("When it is called, then Exercise 1 is rendered", () => {
    render(<ExerciseOne />);

    const title = screen.getByRole("heading", {
      level: 3,
      name: "Exercise 1 / Demo.",
    });

    expect(title).toBeInTheDocument();
  });
});
