import { configureStore } from '@reduxjs/toolkit';
import reservation from '../modules/reservation';
import spaces from '../modules/spacesSlice';
import space from '../modules/spaceSlice';
import mr from '../modules/spaceMrSlice';
import box from '../modules/spaceBoxSlice';
import detail from '../modules/detail';
import loginSlice from '../modules/loginSlice';
const store = configureStore({
  reducer: {
    reservation,
    spaces,
    space,
    detail,
    loginSlice,
    mr,
    box,
  },
});

export default store;
