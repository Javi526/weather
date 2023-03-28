import { FirstLetter } from "@/utils";
import { WeekDay } from "@/utils/format/locale";
import { ENDPOINTS } from "@/config";
import { Description } from "@/constants/text";

type Props = {
    value: any
};

export default function Weather({ value } : Props) {
    return (
        <div className="container-forescast">
            {value?.map((e : any) => (
                <div className="card-forescast" key={e.dt_txt}>
                    <p className="card-forescast-p">
                        {FirstLetter(WeekDay(e.dt_txt).format("dddd"))}
                    </p>
                    <div  className="card-forescast-img">
                        <img
                            className="img"
                            src={ENDPOINTS.IMAGE(e.weather[0].icon)}
                            alt={ENDPOINTS.IMAGE(e.weather[0].id)}
                        />
                    </div>
                    <div className="container-description">
                        <p className="p-2">
                            {Description[e.weather[0].description]}
                        </p>
                        <p className="p-2">
                            {e.main.temp} / {e.main.temp_min} °C
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}