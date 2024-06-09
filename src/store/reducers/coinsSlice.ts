import { createSlice } from "@reduxjs/toolkit";

interface CoinsSliceProps {
    count: number,
    passive: number
}

const initialState: CoinsSliceProps = {
    count: 0,
    passive: 0
};

export const coinsSlice = createSlice({
    name: 'coins',
    initialState: initialState,
    reducers: {
        upPassive(state, action) {
            state.passive += action.payload.passive;
            state.count -= action.payload.count;
        },
        setCoinsPassive(state) {
            state.count += state.passive;
        },
        setCoins(state) {
            state.count += 1;
        },
    }
})

export const coinsActions = coinsSlice.actions;
export const coinsReducer = coinsSlice.reducer;