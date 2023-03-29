import axios from "axios";
import { openIpNotification, openLocationNotification } from "@/utils/notification";
import { ENDPOINTS } from "@/config";
import { City } from "@/constants/search";

const FetchDataIp = async (url: string) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
       if (typeof document !== 'undefined') openIpNotification("topRight");
        return "";
    }
};

export const FetchDataLocation = async () => {
   const IP: string = await FetchDataIp(ENDPOINTS.IP_V4);
       try {
           const { data } = await axios.get(ENDPOINTS.IP_GEOLOCATION(IP));
           return data?.regionName;
       } catch (err) {
           if (typeof document !== 'undefined') openLocationNotification("topRight")
           return City;
       }
};

// @ts-ignore
export const Address = await FetchDataLocation();

