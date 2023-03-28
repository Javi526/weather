import { createContext, ReactNode, useCallback, useContext, useEffect, useReducer } from "react";
import { FETCH_FORECAST_SUCCESS, FETCH_FORECAST_ERROR, InitialHour } from "@/constants/forecast";
import { initialState, reducer } from "@/reducers/forecast";
import { Context as SearchContext } from "@/hooks/search";
import { ENDPOINTS } from "@/config";
import axios from "axios";

type Props = {
    children: ReactNode
};

export const Context = createContext<any>(null);

export const HookContextWeatherForecast = ({ children } : Props) => {
    const { state } = useContext(SearchContext);
    const [forecastState, forecastDispatch] = useReducer(reducer, initialState);

    const FetchData = useCallback(async () => {
        if (state.data?.name) {
            try {
                const response = await axios.get(ENDPOINTS.SEARCH_FORECAST(state.data.name));
                forecastDispatch({ type: FETCH_FORECAST_SUCCESS, payload: response.data, hour: InitialHour });
            } catch (err) {
                forecastDispatch({ type: FETCH_FORECAST_ERROR });
            }
        }
    }, [state.data?.name]);

    useEffect(() => {
        FetchData()
    }, [FetchData]);

    return (
        <Context.Provider value={{ forecastState, forecastDispatch }}>
            {children}
        </Context.Provider>
    )
}