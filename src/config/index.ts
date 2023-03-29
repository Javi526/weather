/**
 * API OPENWEATHERMAP
 */

const HOST = "https://api.openweathermap.org/data/2.5/";
const APPID = "6de56b37b8e1dffd1ad7bf4b8bd90a20";
const IP_GEOLOCATION = "http://ip-api.com/json";

interface Enpoints_Interface {
    SEARCH: (city: string) => string,
    IP_GEOLOCATION: (ip: string) => string,
    IP_V4: string,
    SEARCH_FORECAST: (city: string)=> string;
    IMAGE: (value: string) => string;
}

export const ENDPOINTS : Enpoints_Interface = {
    SEARCH: (city: string) : string => `${HOST}weather?q=${city}&units=metric&appid=${APPID}`,
    IP_GEOLOCATION: (ip: string): string => `${IP_GEOLOCATION}/${ip}`,
    IP_V4: "https://api.ipify.org",
    SEARCH_FORECAST: (city: string): string=> `${HOST}forecast?q=${city}&units=metric&appid=${APPID}`,
    IMAGE: (value: string): string => `http://openweathermap.org/img/wn/${value}@2x.png`,
};