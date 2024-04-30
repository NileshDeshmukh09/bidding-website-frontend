import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    token : null
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        setToken : (state, action) => {
            state.token = action.payload
        },
        loginSuccess: (state, action) => {
            state.user = action.payload
        },

        logout: (state) => {
            state.user = null
        }
    }
})

export const {  loginSuccess, setToken, logout } = userSlice.actions
export default userSlice.reducer