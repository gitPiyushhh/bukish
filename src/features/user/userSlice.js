import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

/*
  Initial state
*/
const initialState = {
  users: [
    {
      name: 'Shruti',
      books: 2 
    }
  ],
  name: "",
  email: "",
};

/*
  Slice
*/

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: {
      prepare({ name, email }) {
        return {
          payload: { name, email },
        };
      },

      reducer(state, action) {
        /*
            Data validation 
        */  
        if (!action.payload.name.length || !action.payload.email.length || !action.payload.email.includes('@')) {
          alert("Values not complete..");
          return;
        }

        const newUser = {
          name: action.payload.name,
          email: action.payload.email,
        };

        state.users = [...state.users, newUser];
      },
    },
  },
});

/*
  Action creators
*/
export const { addUser } = userSlice.actions;

/*
  Reducer
*/
export default userSlice.reducer;
