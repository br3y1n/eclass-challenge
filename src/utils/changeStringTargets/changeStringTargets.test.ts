import { changeStringTargets } from "./changeStringTargets";
import { StringTargetsEnum } from "../../enums";

describe("changeStringTargets tests:", () => {
  it("When it is called with matchers, then it change the string with the matchers", () => {
    const oldString = `this test will be change ${StringTargetsEnum.TARGET_1}`;
    const newString = changeStringTargets(oldString, [
      { match: StringTargetsEnum.TARGET_1, newValue: "with a new value" },
    ]);

    expect(newString).toEqual("this test will be change with a new value");
  });
});
