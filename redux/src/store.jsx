import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice.jsx'

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})