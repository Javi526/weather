import dayjs from "dayjs";

export const Schedules = (hour: number) => {
    let countStart : number = hour;
    const array : any[] = [];
    const hourStart = (num: number) : string => dayjs().set("hour", num).set("minute", 0).format("HH:mm A");
    let changeHour : string = `${hourStart(hour)}`;
    const zeroHour: string = `${dayjs().hour(0).set("minute", 0).format("HH:mm A")}`;
    const hourEnd : string = `${dayjs().hour(23).set("minute", 0).format("HH:mm A")}`;
    while (zeroHour !== hourStart(countStart) && changeHour <= hourEnd) {
        changeHour = `${hourStart(countStart)}`;
        array.push({ id: countStart, hours: changeHour });
        countStart += hour;
    }
    return array;
}