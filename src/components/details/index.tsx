import { useContext } from "react";
import { Context } from "@/hooks/search";
import { Descriptions } from "antd";
import { Card } from "antd";
import Loading from "@/components/loading";

export default function Details() {
    const { state } = useContext(Context);

    const { data, loading } = state;

    return (
        <Card
            title="Detalles del Tiempo"
            style={{ width: "100%", paddingBottom: 37, alignItems: "center" }}
        >
            {!loading && data ? (
                <Descriptions bordered>
                    <Descriptions.Item label="Ciudad">{data.name}</Descriptions.Item>
                    <Descriptions.Item label="Humedad">
                        {data.main.humidity}%
                    </Descriptions.Item>
                    <Descriptions.Item label="Presion">
                        {data.main.pressure}
                    </Descriptions.Item>
                    <Descriptions.Item label="Temperatura">
                        {Math.max(data.main.temp)} °C
                    </Descriptions.Item>
                    <Descriptions.Item label="Temperatura Maxima">
                        {data.main.temp_max} °C
                    </Descriptions.Item>
                    <Descriptions.Item label="Temperatura Minima">
                        {Math.min(data.main.temp_min)} °C
                    </Descriptions.Item>
                    <Descriptions.Item label="Nivel del Suelo">
                        {data.main.grnd_level}
                    </Descriptions.Item>
                    <Descriptions.Item label="Nivel del Mar">
                        {data.main.sea_level}
                    </Descriptions.Item>
                </Descriptions>
            ) : (
                <Loading />
            )}
        </Card>
    );
}