import { createSlice } from "@reduxjs/toolkit";
import busImg from "../../images/svg/bus.svg";
import taxesImg from "../../images/svg/taxes.svg";
import moneyGrowthImg from "../../images/svg/money_growth.svg";
import shopImg from "../../images/svg/shop.svg";

export interface IncomeSliceProps {
    id: number,
    name: string,
    title: string,
    icon: string,
    level: number,
    up: number,
    income: number,
    coins: number,
    people: number
}

const initialState: IncomeSliceProps[] = [
    {
        id: 0,
        name: 'bus',
        title: 'Общественный транспорт',
        icon: busImg,
        level: 0,
        up: 10,
        income: 0,
        coins: 40,
        people: 0
    },
    {
        id: 1,
        name: 'taxes',
        title: 'Налоги',
        icon: taxesImg,
        level: 0,
        up: 50,
        income: 0,
        coins: 150,
        people: 50
    },
    {
        id: 2,
        name: 'money_growth',
        title: 'Бюджетные поступления',
        icon: moneyGrowthImg,
        level: 0,
        up: 150,
        income: 0,
        coins: 700,
        people: 100
    },
    {
        id: 3,
        name: 'shop',
        title: 'Магазины',
        icon: shopImg,
        level: 0,
        up: 250,
        income: 0,
        coins: 1000,
        people: 275
    }
];

export const incomeSlice = createSlice({
    name: 'income',
    initialState: initialState,
    reducers: {
        setLevelUpIncome(state, action) {
            state[action.payload.id].income += state[action.payload.id].up;
            state[action.payload.id].level += 1;
            state[action.payload.id].people = Math.round(state[action.payload.id].coins * (1.5 + action.payload.id));
            state[action.payload.id].up = Math.round(state[action.payload.id].up * 1.2);
            state[action.payload.id].coins = Math.round(state[action.payload.id].coins * (1.7 + action.payload.id));
        }
    }
})

export const incomeActions = incomeSlice.actions;
export const incomeReducer = incomeSlice.reducer;