import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import bankReducer from '../features/bank/bankSlice'

export const store = configureStore({
  reducer: {
    bank: bankReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
