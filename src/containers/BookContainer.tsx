//import {connect } from 'react-redux'
import Book from '../components/Book/Book'
import { add_list } from '../Reducer/wishlist'
import {Wishlist} from '../Reducer/wishlist'
import { RootState } from '../Reducer';
import Search from '../components/Book/Search';
import { getPost } from '../Reducer/book'
import { useAppDispatch, useAppSelector } from "../app/hook";

const BookContainer = () => {

    const book = useAppSelector((state: RootState) => state.books)
    const loading = useAppSelector((state: RootState) => state.books.loading.GET_POST);
    const dispatch = useAppDispatch();

    const addWishlist = (newWishlist : Wishlist) => {
        dispatch(add_list(newWishlist))
    }

    const loadingBook = (keyword:string ) =>{
        dispatch(getPost(keyword))
    }
    return (
        <div>
            <Search getpost = {loadingBook}/>
            <Book 
            post = {book.post!}
            loadingPost = {loading}
            add_list = {addWishlist}
            />
        </div>
    )
}
export default BookContainer;