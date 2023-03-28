import { Fragment } from "react";
import { Card } from "antd";
import { Context } from "@/hooks/forecast";
import { useContext } from "react";
import Spin from "@/components/loading";
import { weekdayForecast } from "@/utils/weekdayForecast";
import ForecastHour from "@/components/forecast/hour";
import Weather from "@/components/forecast/weather";

export default function WeatherForecast() {
    const { forecastState } = useContext(Context);

    return (
        <Card title="Pronóstico del tiempo">
            {!forecastState?.loading ? (
                <Fragment>
                    <ForecastHour />
                    <Weather value={weekdayForecast(forecastState?.data, forecastState.hour)} />
                </Fragment>
            ) : (
                <Spin />
            )}
        </Card>
    );
}
