export interface Clouds_Interface {
    all: number
}

export interface Coord_Interface {
    log: number,
    lat: number
}

interface Main_Interface {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}

interface Sys_Interface {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number,
}

interface Weather_Interface {
    description: string,
    icon: string,
    id: number,
    main: string,
}

interface Wind_Interface {
    speed: number,
    deg: number
}

export interface Search_Data_Interface {
    base: string,
    clouds: Clouds_Interface,
    cod: number,
    coord: Coord_Interface,
    dt: number,
    id: number,
    main: Main_Interface,
    name: string,
    sys: Sys_Interface,
    timezone: number,
    visibility: number,
    weather: Weather_Interface[],
    wind: Wind_Interface
}