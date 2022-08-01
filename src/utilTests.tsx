import { PropsWithChildren, ReactElement } from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppStore, RootState } from "./models";
import favoritesReducer from "./store/reducers/favoritesReducer";
import { BrowserRouter } from "react-router-dom";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  component: ReactElement,
  {
    preloadedState = { favorites: { characters: [] } },
    store = configureStore({
      reducer: {
        favorites: favoritesReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {children}
      </BrowserRouter>
    </Provider>
  );

  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }),
  };
};

export { renderWithProviders };
