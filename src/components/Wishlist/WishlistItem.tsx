import React from "react"
import './Wishlist.css';
import {Wishlist} from "../../Reducer/wishlist"

type WishlistItemProps = {
    wishlist: Wishlist;
    onRemove: (id:string) => void;
}

export const WishlistItem = ({wishlist, onRemove}: WishlistItemProps) => {
    
    //const dispatch = useDispatch();

    const remove = () => {
        onRemove(wishlist.id)
    }
    return (
        <ul className = "WishlistItem">
            <li>{wishlist.title}
            <button onClick= {remove}> remove </button>
            </li>
        </ul>
    )
}

