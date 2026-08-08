import { createSlice } from "@reduxjs/toolkit";
import { hyderateUserAction, loginUserAction } from "./authAction";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user:null,
        isAuthenticated:false,
        isLoading:true,
    },
    // reducers:{
    //     addUser:(state,action)=>{
    //         state.user = action.payload;
    //         state.isAuthenticated = true;
    //         state.isLoading=false;
    //     },
    //     removeUser:(state)=>{
    //         state.user = null;
    //         state.isAuthenticated = false;
    //         state.isLoading=false;
    //     }
    // },
    extraReducers:(builder)=>{  // thunk ne state tk pocha diya h data ab yaha pr extrareducers ka kaam h ki wo state ko change kre
        builder.addCase(loginUserAction.pending,(state,action)=>{
            state.isLoading= true;
        }).addCase(loginUserAction.fulfilled,(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true;
            state.isLoading=false;
        }).addCase(loginUserAction.rejected,(state,action)=>{
            state.isLoading=false;
        }).addCase(hyderateUserAction.pending,(state,action)=>{
            state.isLoading=true;
        }).addCase(hyderateUserAction.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isAuthenticated=true;
            state.isLoading=false;
        }).addCase(hyderateUserAction.rejected,(state,action)=>{
            state.isLoading=false;
        })
    }
})

export const {addUser,removeUser} = authSlice.actions;
export default authSlice.reducer;