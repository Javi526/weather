export const weekdayForecast = (value: any, hour: number | undefined) => {
        if (value) return value.list.filter((e : any) => new Date(e.dt_txt).getHours() === hour);
        return [];
}

