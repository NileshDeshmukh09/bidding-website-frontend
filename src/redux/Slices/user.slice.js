import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    loading: false,
    error: false
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        loginFailed: (state , action) => {
            state.loading = false
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { loginStart, loginSuccess, loginFailed, logout } = userSlice.actions
export default userSlice.reducer