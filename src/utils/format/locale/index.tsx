import dayjs from "dayjs";
import locale from "dayjs/locale/es";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";

dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);

export const WeekDay = (date: string) => dayjs(date).locale({ ...locale });
export const Day = (num: number) => dayjs(num).locale({ ...locale });
