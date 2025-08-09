import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IRegistration, SubPageType } from "../store";

const initialState: IRegistration = {
  personId: null,
  cardId: null,
  subPage: { current: "main", data: null },
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setPatientId: (
      state: IRegistration,
      action: PayloadAction<number | null>
    ) => {
      state.personId = action.payload;
    },
    setCardId: (state: IRegistration, action: PayloadAction<number | null>) => {
      state.cardId = action.payload;
    },

    setSubPageData: (
      state: IRegistration,
      action: PayloadAction<SubPageType<unknown>>
    ) => {
      state.subPage = action.payload;
    },
  },
});

export const {
  setPatientId,
  setCardId,
  setSubPageData,
} = registrationSlice.actions;

export default registrationSlice.reducer;
