import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coinsReducer } from './reducers/coinsSlice';
import { incomeReducer } from './reducers/incomeSlice';
import { populationReducer } from './reducers/populationSlice';
import { peopleReducer } from './reducers/peopleSlice';

const reducers = combineReducers({
    coinsReducer,
    incomeReducer,
    populationReducer,
    peopleReducer
})

export const store = configureStore({
    reducer: reducers
});


export type RootState = ReturnType<typeof reducers>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];