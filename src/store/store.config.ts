import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import registration from "./reducers/registration.reducer";
import mainApp from "../store/reducers/mainApp.reducer";

const rootReducer = combineReducers({
  mainApp,
  registration,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// Type for global state
export type GlobalState = ReturnType<typeof store.getState>;

// Create a typed selector hook
export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector;

// Define the useStore hook with correct typing
export const useStore = <
  R extends keyof GlobalState,
  S extends keyof GlobalState[R]
>(
  reducer: R, // The selected reducer key (e.g., 'mainApp', 'registration')
  state: S // The key of the specific state within the selected reducer
) => {
  return useAppSelector(
    //@ts-ignore
    (globalState: GlobalState) => globalState[reducer][state]
  );
};
