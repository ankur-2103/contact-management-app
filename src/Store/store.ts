import contactSlice from "../Slice/contactSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// This file creates a redux store

// Create redux store
export const store = configureStore({
    reducer: {
        contact: contactSlice
    }
})

// export disptach
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// export selector
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;