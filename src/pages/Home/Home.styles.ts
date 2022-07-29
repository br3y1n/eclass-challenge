import { Styles } from "../../models/Styles.models";
import { keyframes } from "@emotion/react";

const imgKeyframe = keyframes`  
    25% { transform: translateY(-8px)  rotate(8deg)  }
    75% { transform: translateY(-16px)  rotate(-8deg)  }
`;

const homeStyles: Styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    width: "70%",
    maxWidth: ({ spacing }) => spacing(60),
    animation: `${imgKeyframe} 4s infinite linear`,
  },
  message: {
    width: "80%",
    fontSize: { xs: "28px", sm: "40px" },
  },
};

export { homeStyles };
