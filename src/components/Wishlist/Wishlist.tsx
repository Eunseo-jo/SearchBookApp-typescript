import React from "react"
import {WishlistItem} from "./WishlistItem"
import './Wishlist.css';
import {Wishlist} from "../../Reducer/wishlist"

type WishlistProps = {
    wishlists: Wishlist[];
    onRemove: (id:string) => void;
}

export const WishList = ({wishlists, onRemove}: WishlistProps) => {
    
    return (
        <div className = "Wishlist-Container">
            <h3>My reading list ({wishlists.length})</h3>
            { wishlists.map((list) => 
               <WishlistItem key = {list.id} wishlist = {list} onRemove = {onRemove} />
                
        )}

        </div>
    )
}

