import { Select } from "antd";
import { Schedules } from "@/utils/schedules";
import { useContext } from "react";
import { Context } from "@/hooks/forescast";
import { FETCH_FORECAST_SUCCESS } from "@/constants/forecast";

export default function ForecastHour() {
    const { forecastState, forecastDispatch } = useContext(Context);
    const { Option, OptGroup } = Select;
    const hourStart: number = 3;
    const type = (p: number) : string => (p <= 12 ? "AM" : "PM");

    function handleChange(data : string) : void {
        forecastDispatch({ type: FETCH_FORECAST_SUCCESS, payload: forecastState.data, hour: Number(data) });
    };

    return (
        <div className="card-forescast-select">
            <p className="p-3">Horarios:</p>
            <Select
                defaultValue={`${forecastState?.hour}:00hs - ${type(forecastState?.hour)}`}
                style={{ width: 130, textAlign: "center" }}
                onChange={handleChange}
            >
                <OptGroup label="Horas">
                    {Schedules(hourStart).map((data : any) => (
                        <Option value={data.id} key={data.id}>{data.hours}</Option>
                    ))}
                </OptGroup>
            </Select>
        </div>
    )
}