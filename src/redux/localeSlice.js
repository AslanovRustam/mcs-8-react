import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const selectLang = state => state.locale.lang;

export const useLang = () => useSelector(selectLang);

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: {
      reducer(state, action) {
        state.lang = action.payload.value;
      },
      prepare(nextLang) {
        return {
          payload: {
            value: nextLang,
          },
        };
      },
    },
  },
});

export const { changeLang } = slice.actions;

// console.log(changeLang("EN"));
// {type: 'locale/changeLang', payload: 'EN'}
// { type: 'locale/changeLang', payload: { value: "EN"} }

export default slice.reducer;
