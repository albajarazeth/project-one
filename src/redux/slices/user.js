const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: { name: "okok", email: "random@gmail.com", age: "23" },
  reducers: {
    login: (state, action) => {
      // state.value = action.payload;
      const { name, email, age } = action.payload;
      state = { ...state, name, email, age }; // Update specific properties using spread operator
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
