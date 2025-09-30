import {createSlice} from "@reduxjs/toolkit"
import {nanoid} from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        title: 'Learning redux toolkit',
        content: 'Ive heard good thiings about it'
    },
    {
        id: '2',
        title: 'Slices...',
        content: 'The more i say slice the more i want pizza'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userId){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            },
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer