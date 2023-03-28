import {NotificationPlacement} from "antd/es/notification/interface";
import {notification} from "antd";

export const openNotification = (placement : NotificationPlacement , text: string) => {
    notification.error({
        message: `Error de Busqueda ${text}`,
        description: "La ciudad ingresada no se encuentra",
        placement,
    });
};