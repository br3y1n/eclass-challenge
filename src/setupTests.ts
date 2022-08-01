import "@testing-library/jest-dom";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => ({
  atelierPlateauDark: {},
}));

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: jest.fn(),
}));
