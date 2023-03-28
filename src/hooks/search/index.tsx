import { createContext, ReactNode, useCallback, useEffect, useReducer } from "react";
import axios from "axios";
import { FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR } from "@/constants/search";
import { initialState, reducer } from "@/reducers/search";
import { ENDPOINTS } from "@/config";
import { openNotification } from "@/utils/notification";

type Props = {
    children: ReactNode
};

export const Context = createContext<any>(null);

export const HookContextSearch = ({ children } : Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const FetchData = useCallback(async () => {
        if (state.city) {
            try {
                const { data } = await axios.get(ENDPOINTS.SEARCH(`${state.city}`));
                dispatch({ type: FETCH_SEARCH_SUCCESS, payload: data });
            } catch (err) {
                    openNotification("topRight", state.city)
                    dispatch({ type: FETCH_SEARCH_ERROR });
            }
        }
    }, [state.city]);

    useEffect(() => {
        FetchData()
    }, [FetchData]);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}