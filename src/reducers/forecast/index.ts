import { FETCH_FORECAST_SUCCESS, FETCH_FORECAST_ERROR, FETCH_FORECAST_INITIAL, InitialHour } from "@/constants/forecast";
import { Forecast_Interface } from "@/interface/forecast";

type Props = {
    loading: boolean,
    error: string,
    data: Forecast_Interface | object,
    hour?: number
};

interface Action {
    type: string;
    payload?: any;
    hour?: number
}

export const initialState : Props = {
    loading: true,
    error: "",
    data: {},
    hour: InitialHour
};

export const reducer = (state: Props, action: Action): Props => {
    switch (action.type) {
        case FETCH_FORECAST_INITIAL:
            return initialState;
        case FETCH_FORECAST_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                hour: action.hour,
                error: ""
            };
        case FETCH_FORECAST_ERROR:
            return {
                loading: false,
                data: {},
                error: action.payload
            }
        default:
            return state;
    }
};


