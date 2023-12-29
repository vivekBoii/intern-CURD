import { configureStore } from '@reduxjs/toolkit';
import DashBoardSlice from './Slices/DashBoardSlice';

export default configureStore({
  reducer: {
    Project:DashBoardSlice,
  }
})