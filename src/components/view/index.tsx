import React, { useContext } from "react";
import { Context } from "@/hooks/search";
import { ENDPOINTS } from "@/config";
import Loading from "@/components/loading";
import { Description } from "@/constants/text";
import { Day } from "@/utils/format/locale";
import { FirstLetter } from "@/utils";
import Image from "next/image";

export default function WeatherView() {
    const { state } = useContext(Context);
    const { data, loading } = state;

    return (
        <React.Fragment>
            {!loading && data ? (
                <div className="container-image">
                    <div className="container-image-content">
                        <p className="p-2">{FirstLetter(Day(data.dt * 1000).format("dddd"))}</p>
                        <Image
                            className="img"
                            src={ENDPOINTS.IMAGE(data.weather[0].icon)}
                            alt={ENDPOINTS.IMAGE(data.weather[0].id)}
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="container-description">
                        <p className="p-2">{Description[data.weather[0].description]}</p>
                        <p className="p-2">
                            {data.main.temp_min} / {data.main.temp_max} °C
                        </p>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </React.Fragment>
    );
}
