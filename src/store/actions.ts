import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { coinsActions } from "./reducers/coinsSlice";
import { incomeActions } from "./reducers/incomeSlice";
import { populationActions } from "./reducers/populationSlice";
import { peopleActions } from "./reducers/peopleSlice";

const actions = {
    ...coinsActions,
    ...incomeActions,
    ...populationActions,
    ...peopleActions
}

export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
