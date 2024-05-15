import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userProfile: null,
}


export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {

        setUserProfile : (state, action) => {
            state.userProfile = action.payload

        },

    }
})

export const { setUserProfile } = profileSlice.actions
export default profileSlice.reducer