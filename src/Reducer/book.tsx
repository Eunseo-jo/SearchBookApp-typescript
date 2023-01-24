import * as api from '../lib/api'
import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const GET_POST = 'book/GET_POST' as const;


export interface bookProps {
    
    id: string
    volumeInfo: {
        title: string
        authors: string []
        publisher: string
        publishedDate: string
        description: string
        imageLink: { smallThumbnail: string; thumbnail: string };
    }
}

//export type postState = bookProps[];

export interface BookState {
    loading : {
        GET_POST: boolean,
    },
    post: null | bookProps[],
}

const initialState: BookState = {
    loading : {
        GET_POST: false,
    },
    post: null,
}

export const getPost = createAsyncThunk(GET_POST,
    async (keyword: string) => {
        const response = await api.getPost(keyword);
        //const data = await response.json();
        return response.data.items as bookProps[];
    }
)
  
export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPost.pending, (state) => {
            state.loading.GET_POST = true
        })
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.post = action.payload
            state.loading.GET_POST = false
        })
        builder.addCase(getPost.rejected, (state) => {
            state.post = []
            state.loading.GET_POST = false
        })
    }
})
      
export default bookSlice.reducer;