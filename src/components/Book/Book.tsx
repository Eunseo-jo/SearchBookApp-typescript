import './Book.css';
import {bookProps} from "../../Reducer/book"

type BookProps = {
    loadingPost: boolean;
    post: bookProps[]
    add_list: (wishlist: {id:string, title: string}) => void;
}


const Book = ({loadingPost, post, add_list }:BookProps) => {

    const addWishList = (id:string, title: string) => {
        const newWishlist = {
            id: id,
            title: title,
        }
        add_list(newWishlist)
    }

    return (
        <div>
            { loadingPost ? 'loading..' : post?.map((book) => 
                { return (
                    <li className = "Book-Container"  key = {book.id}
                        onClick = { () =>addWishList(book.id, book.volumeInfo.title)}>
                            <section>
                            <img src = {book.volumeInfo.imageLink?.smallThumbnail} alt = {book.id} />
                            </section>

                            <section>
                            <h3> {book.volumeInfo.title} </h3>
                            <p> <b>Authors: </b> { book.volumeInfo?.authors ? book.volumeInfo?.authors: "Unknown" } </p>
                            <p> <b>Publisher: </b> { book.volumeInfo.publisher ? book.volumeInfo.publisher : "Unknown" } </p>
                            <p> <b>published date: </b> { book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : "Unknown" }</p>
                            <p> <b>description: </b> { book.volumeInfo.description ? book.volumeInfo.description.slice(0,300) : "Unknown"} </p>
                            </section>
                        </li>
                        )
                    })
                }
        </div>
    )
}

export default Book;