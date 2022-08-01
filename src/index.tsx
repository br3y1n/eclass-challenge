import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { theme } from "./themes/theme";
import { ThemeProvider } from "@mui/material";
import { ApisEnum } from "./enums";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: ApisEnum.RICK_AND_MORTY,
  cache: new InMemoryCache(),
});

root.render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </StrictMode>
);
