import { Clouds_Interface, Coord_Interface } from "@/interface/search";

interface City_Interface {
    coord: Coord_Interface,
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
}

interface Main_Interface {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number,
    temp_kf: number,
}

interface Sys_Interface {
    pod: string
}

interface Wind_Interface {
    speed: number,
    deg: number,
    gust: number
}

interface Weather_Interface {
    description: string,
    icon: string,
    id: number,
    main: string
}

export interface List_Interface {
    clouds: Clouds_Interface,
    dt: number,
    dt_txt: string
    main: Main_Interface,
    pop: number,
    sys: Sys_Interface,
    visibility: number,
    weather: Weather_Interface[],
    wind: Wind_Interface
}

export interface Forecast_Interface {
    city: City_Interface,
    cnt: number,
    cod: string,
    list: List_Interface[]
    message: number
}