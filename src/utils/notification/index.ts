import { NotificationPlacement } from "antd/es/notification/interface";
import { notification } from "antd";

export const openNotification = (placement : NotificationPlacement , text: string) => {
    notification.error({
        message: `Error de Busqueda ${text}`,
        description: "La ciudad ingresada no se encuentra, se agregara una ciudad por default",
        placement,
    });
};

export const openIpNotification = (placement : NotificationPlacement) => {
    notification.error({
        message: `Surgio un error`,
        description: "Surgio un error, detectar su ip",
        placement,
    });
};

export const openLocationNotification = (placement : NotificationPlacement) => {
    notification.error({
        message: `Surgio un error`,
        description: "Surgio un error, detectar su ubicación, se agregara un valor por default",
        placement,
    });
};