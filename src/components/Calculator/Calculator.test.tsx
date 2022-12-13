/* eslint-disable jest/valid-expect */
import Calculator from "./Calculator";

describe("Calculator", () => {
  let component: JSX.Element;

  beforeEach(() => {
    component = <Calculator />;
  });

  test("render Calculator component", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(component).toContainHTML;
  });
});