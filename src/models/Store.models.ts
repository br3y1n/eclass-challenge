import { store } from "../store/store";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppStore = typeof store;

export type { RootState, AppDispatch, AppStore };
