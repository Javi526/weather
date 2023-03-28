import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
    const antIcon = (
        <LoadingOutlined style={{ fontSize: 35, color: "#2c3357" }} spin />
    );
    return (
        <div className="loading">
            <Spin indicator={antIcon} />
        </div>
    );
}