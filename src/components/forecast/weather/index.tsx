import { FirstLetter } from "@/utils";
import { WeekDay } from "@/utils/format/locale";
import { ENDPOINTS } from "@/config";
import { Description } from "@/constants/text";
import { List_Interface } from "@/interface/forecast";
import Image from "next/image";

type Props = {
    value: List_Interface[]
};

export default function Weather({ value } : Props) {

    console.log("values", value)
    return (
        <div className="container-forescast">
            {value?.map((e : List_Interface) => (
                <div className="card-forescast" key={e.dt_txt}>
                    <p className="card-forescast-p">
                        {FirstLetter(WeekDay(e.dt_txt).format("dddd"))}
                    </p>
                    <div  className="card-forescast-img">
                        <Image
                            className="img"
                            src={ENDPOINTS.IMAGE(e.weather[0].icon)}
                            alt={ENDPOINTS.IMAGE(`${e.weather[0].id}`)}
                            width={80}
                            height={80}
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