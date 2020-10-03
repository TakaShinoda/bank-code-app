import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'
import dataBank from './apiDataBank.json'

const apiUrl = 'https://bankcode-api.appspot.com/api/bank/JP?name='

type DATABANK = typeof dataBank

type bankState = {
    bank: DATABANK
    bankname: string
}

const initialState: bankState = {
    bank: dataBank,
    bankname: ''
}