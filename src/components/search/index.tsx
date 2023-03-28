import { Input, Card } from "antd";
import { useContext } from "react";
import { Context } from "@/hooks/search";
import { FETCH_SEARCH_SUCCESS } from "@/constants/search";

export default function Search() {
    const { Search } = Input;

    const { dispatch } = useContext(Context);

    const onSearch = (value: string) : void => {
        if (value) dispatch({ type: FETCH_SEARCH_SUCCESS, city: value });
    };

    return (
        <Card>
            <Search
                placeholder="Buscar Ciudad"
                allowClear
                onSearch={(text: string) => onSearch(text)}
                style={{ width: "100%" }}
                enterButton
            />
        </Card>
    )
}