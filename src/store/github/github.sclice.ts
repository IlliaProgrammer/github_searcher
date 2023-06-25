import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const Key = "ghk"

interface GithubState {
    favourites: string[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(Key) ?? '[]')
}

export const  githubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>){
            state.favourites.push(action.payload)
            localStorage.setItem(Key, JSON.stringify(state.favourites))
        },
        deleteFavourite(state, action: PayloadAction<string>){
            state.favourites = state.favourites.filter(f => f!==action.payload)
            localStorage.setItem(Key, JSON.stringify(state.favourites))
        }
    }
})

export const githubActions = githubSlice.actions
export default githubSlice.reducer;