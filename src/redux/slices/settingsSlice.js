import { Themes } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    theme: Themes.LIGHT,
    notificationsEnabled: true,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleNotifications: (state) => {
      state.notificationsEnabled = !state.notificationsEnabled;
    },
  },
});

export const { setTheme, toggleNotifications } = settingsSlice.actions;
export default settingsSlice.reducer;
