import { createSlice } from "@reduxjs/toolkit";

interface PeopleSliceProps {
    count: number
}

const initialState: PeopleSliceProps = {
    count: 0,
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState: initialState,
    reducers: {
        setPeople(state, action) {
            state.count += action.payload.count;
        },
    }
})

export const peopleActions = peopleSlice.actions;
export const peopleReducer = peopleSlice.reducer;