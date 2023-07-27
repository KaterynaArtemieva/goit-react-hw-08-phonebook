import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logout,
  fetchCurrentUser,
} from './authOperations';

import {
  handleLogIn,
  handleLogOut,
  handleRefreshUserFulfilled,
  handleRefreshUserPending,
  handleRefreshUserRejected,
  handleRegister,
} from './constants';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(registration.fulfilled, handleRegister)
      .addCase(login.fulfilled, handleLogIn)
      .addCase(logout.fulfilled, handleLogOut)
      .addCase(fetchCurrentUser.pending, handleRefreshUserPending)
      .addCase(fetchCurrentUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(fetchCurrentUser.rejected, handleRefreshUserRejected),
});

export const authReducer = authSlice.reducer;