import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'
import dataBank from './apiDataBank.json'

const apiUrl = 'https://bank.teraren.com/banks/search.json?kana='

type DATABANK = typeof dataBank

type bankState = {
  bank: DATABANK
  bankName: string
}

const initialState: bankState = {
  bank: dataBank,
  bankName: 'ゆうちょ',
}

export const fetchAsyncGetBankCode = createAsyncThunk(
  'bank/getBankCode',
  async (bankName: string) => {
    const { data } = await axios.get<DATABANK>(`${apiUrl}${bankName}`)
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
        bank: action.payload.data,
        bankName: action.payload.bankName,
      }
    })
  },
})

export const selectBank = (state: RootState) => state.bank.bank
export const selectBankName = (state: RootState) => state.bank.bankName

export default bankSlice.reducer
