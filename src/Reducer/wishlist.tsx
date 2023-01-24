import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Wishlist {
  id: string
  title: string
}
export type wishlistState = Wishlist[];

const initialState: wishlistState = [];


export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add_list: (state, action: PayloadAction<Wishlist>) => {
          return [...state, action.payload]
      },
      remove_list: (state, action: PayloadAction<string>) => {
          return state.filter((book) => book.id !== action.payload)
      }
  }
})

export const { add_list, remove_list } = wishlistSlice.actions
  
export default wishlistSlice.reducer;