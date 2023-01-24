import React, { useState } from 'react';
import './Search.css';

type SearchProps = {
    getpost: (keyword: string) => void;
}

export const Search = ({getpost}: SearchProps) => {

    const [searchKey, setSearchKey] = useState("");
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(e.target.value);
    }
    
    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (searchKey.trim() === "") return;
        else {
            getpost(searchKey)
        }
    }

    return (
        <section>
            <div className = "Search">
                    <input onChange = {onChange} value = {searchKey}/> <button type = "submit" onClick = {() => onSubmit}> submit </button>
            </div>
        </section>
    )
}
export default Search;