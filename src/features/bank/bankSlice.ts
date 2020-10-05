import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'
import dataBank from './apiDataBank.json'

const apiUrl = 'https://bankcode-api.appspot.com/api/bank'

type DATABANK = typeof dataBank

type bankState = {
  bank: DATABANK
  bankName: string
}

const initialState: bankState = {
  bank: dataBank,
  bankName: '',
}

export const fetchAsyncGetBankCode = createAsyncThunk(
  'bank/getBankCode',
  async (bankName: string) => {
    const { data } = await axios.get<DATABANK>(`${apiUrl}/JP?name=${bankName}`)
    return { data: data, bankName: bankName }
  }
)

const bankSlice = createSlice({
  name: 'bank',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetBankCode.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data,
        bankName: action.payload.bankName,
      }
    })
  },
})

export const selectBank = (state: RootState) => state.bank.bank
export const selectBankName = (state: RootState) => state.bank.bankName

export default bankSlice.reducer
