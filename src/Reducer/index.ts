import {combineReducers} from 'redux'
import {bookSlice} from './book'
import {wishlistSlice} from './wishlist';

const rootReducer = combineReducers ({
    wishlist: wishlistSlice.reducer, 
    books: bookSlice.reducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>

