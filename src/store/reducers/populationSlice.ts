import { createSlice } from "@reduxjs/toolkit";
import houseImg from "../../images/svg/house.svg";
import constructionImg from "../../images/svg/construction.svg";
import hotelImg from "../../images/svg/hotel.svg";
import airportImg from "../../images/svg/airport.svg";

export interface PopulationSliceProps {
    id: number,
    name: string,
    title: string,
    icon: string,
    level: number,
    up: number,
    people: number,
    price: number
}

const initialState: PopulationSliceProps[] = [
    {
        id: 0,
        name: 'house',
        title: 'Частные дома',
        icon: houseImg,
        level: 0,
        up: 10,
        people: 0,
        price: 10
    },
    {
        id: 1,
        name: 'construction',
        title: 'Новостройки',
        icon: constructionImg,
        level: 0,
        up: 100,
        people: 0,
        price: 40
    },
    {
        id: 2,
        name: 'hotels',
        title: 'Отели',
        icon: hotelImg,
        level: 0,
        up: 300,
        people: 0,
        price: 160
    },
    {
        id: 3,
        name: 'hotels',
        title: 'Аэропорт',
        icon: airportImg,
        level: 0,
        up: 800,
        people: 0,
        price: 300
    }
];

export const populationSlice = createSlice({
    name: 'population',
    initialState: initialState,
    reducers: {
        setLevelUpPopulation(state, action) {
            state[action.payload.id].people += state[action.payload.id].up;
            state[action.payload.id].level += 1;
            state[action.payload.id].up = Math.round(state[action.payload.id].up * 1.2);
            state[action.payload.id].price *= 2 + action.payload.id;
        }
    }
})

export const populationActions = populationSlice.actions;
export const populationReducer = populationSlice.reducer;