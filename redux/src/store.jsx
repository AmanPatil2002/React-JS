import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.jsx'

export default configureStore({
  reducer: {
    conter:counterReducer,
  },
})