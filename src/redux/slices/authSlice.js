import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../lib/axios'
import { getFromLocalStorage } from '../../utils/functions';

const getAccessToken = () => {
    return getFromLocalStorage('accessToken')
    ? getFromLocalStorage('accessToken')
    : null
}

const getStorageUser = () => {
    return getFromLocalStorage('user')
    ? getFromLocalStorage('user')
    : null
}
const initialState = {
    user: getStorageUser(),
    accessToken: getAccessToken(),
    loading: false,
    isLoggedIn: getAccessToken() ? true : false
}

export const login = createAsyncThunk('auth/login', async (credentials) => {
    const response = await axios.post('/auth/login', credentials)
    console.log( response );
    return response.data
})

export const logout = createAsyncThunk('auth/logout', async () => {
    const response = await axios.post('/auth/logout');
    return response.data;
    console.log( response );
})

export const checkAuthStatus = createAsyncThunk('auth/user', async () => {
    return 'here';
    const response = await axios.get('auth/user')
    return response.data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, payload) => {
            localStorage.setItem('accessToken', payload)
            return {
                ...state,
                accessToken: payload,
            };
        },
        setUser: (state, payload) => {
            return {
                ...state,
                user: payload,
            };
        },
        setLoading: (state, payload) => {
            return {
                ...state,
                loading: payload,
            };
        },
        setIsLoggedIn: (state, payload) => {
            return {
                ...state,
                isLoggedIn: payload,
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                console.log("login.fulfilled", state, payload, authSlice)
                state.loading = false
                state.user = payload.user
                state.accessToken = payload.access_token
                state.isLoggedIn = true
                localStorage.setItem("accessToken", payload.access_token)
            })
            .addCase(logout.pending, (state) => {
                state.loading = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false
                state.user = null
                state.isLoggedIn = false
                localStorage.removeItem('accessToken')
                localStorage.removeItem('user')
            })
            .addCase(checkAuthStatus.pending, (state) => {
                state.loading = true
            })
            .addCase(checkAuthStatus.fulfilled, (state, action) => {
                console.log("checkAuthStatus.fulfilled", state, action)
                state.loading = false
                state.user = action.payload
                state.isLoggedIn = true
            })
    },
})

export const selectUser = (state) => state.auth.user
export const selectIsLoading = (state) => state.auth.loading

export default authSlice.reducer
