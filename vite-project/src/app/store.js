
// sb se pehle configure store krna hai.

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

//! Humesha aik hi store hota hai, aka single source of truth
