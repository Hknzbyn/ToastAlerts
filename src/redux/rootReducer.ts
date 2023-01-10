import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CommonState = {
  toastDetails: {
    id: number;
    status: boolean;
  };
};

const initialState: CommonState = {
  toastDetails: { id: 0, status: false },
};

export const rootReducer = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    hideToast: (state) => {
      state.toastDetails.status = false;
    },
    showToast: (state, action: PayloadAction<number>) => {
      state.toastDetails.id = action.payload;
      state.toastDetails.status = true;
    },
  },
});

export const { hideToast, showToast } = rootReducer.actions;

export default rootReducer.reducer;
