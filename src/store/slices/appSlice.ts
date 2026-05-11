import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isMenuOpen: boolean;
  loading: boolean;
}

const initialState: AppState = {
  isMenuOpen: false,
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleMenu, setLoading } = appSlice.actions;
export default appSlice.reducer;
