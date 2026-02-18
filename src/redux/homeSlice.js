import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    // {
    //   title: "",
    //   discription: "",
    //   backgroundclr: "",
    //   backgroundimg: "",
    //   lable: "",
    //   pinned:"",
    //   id:crypto.randomUUID(),
    // },
  ],
  SearchNote: "",
};

export const noteSlice = createSlice({
  name: "notesaver",
  initialState,
  reducers: {
    createnote: (state, action) => {
      state.notes.push(action.payload);
    },

    updatednote: (state, action) => {
      const { index, payload } = action.payload;
      state.notes[index] = {
        ...state.notes[index],
        ...payload,
      };
    },
    
    deletenote: (state, action) => {
      const { index } = action.payload;
      state.notes.splice(index, 1);
    },
    
    updateSearchQuery: (state, action) => {
      state.SearchNote = action.payload;
    },
  },
});

export const { createnote, updatednote, deletenote, updateSearchQuery } =
  noteSlice.actions;

export default noteSlice.reducer;
