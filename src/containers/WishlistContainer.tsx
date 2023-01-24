import { WishList } from '../components/Wishlist/Wishlist'
import { remove_list } from '../Reducer/wishlist'
import { RootState } from '../Reducer';
import { useAppDispatch, useAppSelector } from "../app/hook";

const WishlistContainer = () => {
    const wishlists = useAppSelector((state: RootState) => state.wishlist);
    const dispatch = useAppDispatch();


    const onRemove = (id: string) => {
        dispatch(remove_list(id))
    }
    
    return (
        <WishList 
            wishlists = {wishlists}
            onRemove = {onRemove}
        />
    )
}
export default WishlistContainer;