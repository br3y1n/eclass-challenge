import { Box, styled, Typography } from "@mui/material";
import { rulesStyles } from "./Rules.styles";
import { ApisEnum } from "../../enums";
import { EVALUATION_CRITERIA, GUIDELINE, STEPS } from "./constants";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierPlateauDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Ul = styled("ul")();
const Li = styled("li")();
const NewSyntaxHighlighter = styled(SyntaxHighlighter)();
const codeString = `<ListNicknames 
    names={["Triviño TI", "Homer Dev", " ", " Ragnar Front", "Loki UX"]}
    order="ASC"
/>`;

const Rules = () => (
  <>
    <Typography variant="h1">Rules</Typography>
    <Typography variant="body1" sx={rulesStyles.description}>
      Hello!
    </Typography>
    <Typography variant="body1" sx={rulesStyles.description}>
      Continuing with the process, the test to go to the next stage consists of
      making a search engine for characters from the Rick and Morty series
      through this
      <Box
        sx={rulesStyles.link}
        component={({ className }) => (
          <a
            className={className}
            href={ApisEnum.RICK_AND_MORTY}
            target="_blank"
          >
            {" GraphQl API"}
          </a>
        )}
      />
      , specifically we want you to develop the following characteristics:
    </Typography>

    <Ul sx={rulesStyles.ul}>
      {STEPS.map((text, index) => (
        <Li key={index} sx={rulesStyles.li}>
          {text}
        </Li>
      ))}
    </Ul>

    <Typography variant="h2">Bonus exercise</Typography>

    <Typography variant="body1" sx={rulesStyles.description}>
      We also need you to solve these little exercises, it shouldn't take more
      than 15min.
    </Typography>

    <Typography variant="h3">Exercise 1.</Typography>

    <Typography variant="body1" sx={rulesStyles.description}>
      Write a function that receives an array of numerics as a parameter, and
      returns another function that expects as a parameter a function that can
      do something with the sum of the original array of integers. Even numbers
      {" > "}20 should be treated as 20.
    </Typography>

    <Typography variant="body1" sx={rulesStyles.description}>
      The solution and code example should look something like this: sum(
      [1,2,3] )( result ={"> "} console.log(result) )
    </Typography>

    <Typography variant="h3">Exercise 2.</Typography>

    <Typography variant="body1" sx={rulesStyles.description}>
      Write a React component called ListNicknames that accepts a list of names
      as a property and prints nicknames in Ascending or Descending order based
      on a property using a {"<ul>"} list, Example:
    </Typography>

    <NewSyntaxHighlighter sx={rulesStyles.code} language="javascript" style={atelierPlateauDark}>
      {codeString}
    </NewSyntaxHighlighter>

    <Typography variant="h2">The guideline</Typography>

    <Ul sx={rulesStyles.ul}>
      {GUIDELINE.map((text, index) => (
        <Li key={index} sx={rulesStyles.li}>
          {text}
        </Li>
      ))}
    </Ul>

    <Typography variant="h2">The evaluation criteria will be</Typography>

    <Ul sx={rulesStyles.ul}>
      {EVALUATION_CRITERIA.map((text, index) => (
        <Li key={index} sx={rulesStyles.li}>
          {text}
        </Li>
      ))}
    </Ul>
  </>
);

export default Rules;
