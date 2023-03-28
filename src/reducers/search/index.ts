import {
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_ERROR,
    FETCH_SEARCH_INITIAL,
    City
} from "@/constants/search";

type Props = {
    loading: boolean,
    error: boolean,
    data: object,
    city: string | undefined
};

interface Action {
    type: string;
    payload: any;
    city?: string;
}

export const initialState : Props = {
    loading: true,
    error: true,
    data: {},
    city: City
};

export const reducer = (state: Props, action: Action): Props => {
    switch (action.type) {
        case FETCH_SEARCH_INITIAL:
            return initialState;
        case FETCH_SEARCH_SUCCESS:
            return {
                loading: false,
                city: action.city,
                data: action.payload,
                error: false
            };
        case FETCH_SEARCH_ERROR:
            return {
                loading: false,
                data: state.data,
                city: City,
                error: true
            }
        default:
            return state;
    }
};


