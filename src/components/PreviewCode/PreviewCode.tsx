import { atelierPlateauDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { styled } from "@mui/material";
import { PreviewCodeProps } from "./models";
import { previewCodeStyles } from "./PreviewCode.styles";

const NewSyntaxHighlighter = styled(SyntaxHighlighter)({});

const PreviewCode: FC<PreviewCodeProps> = ({ code }) => (
  <NewSyntaxHighlighter
    sx={previewCodeStyles.code}
    language="javascript"
    style={atelierPlateauDark}
  >
    {code}
  </NewSyntaxHighlighter>
);

export default PreviewCode;
