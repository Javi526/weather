import { HookContextSearch } from "@/hooks/search";
import Search from "@/components/search";
import { Row, Col, Card } from "antd";
import Details from "@/components/details";
import WeatherForecast from "@/components/forecast";
import WeatherView from "@/components/view";
import { HookContextWeatherForecast } from "@/hooks/forecast";

export default function Home() {
  return (
    <main>
     <HookContextSearch>
      <HookContextWeatherForecast>
         <div className="search_weather">
             <Row gutter={16}>
                 <Col span={24}>
                     <Search />
                 </Col>
                 <Col lg={16} md={24} sm={24} xs={24}>
                     <div className="item">
                         <Details />
                     </div>
                 </Col>
                 <Col lg={8} md={24} sm={24} xs={24}>
                     <div className="item">
                         <Card title="Tiempo">
                             <WeatherView />
                         </Card>
                     </div>
                 </Col>
                 <Col lg={16} md={24} sm={24} xs={24}>
                     <div className="item">
                        <WeatherForecast />
                     </div>
                 </Col>
             </Row>
         </div>
      </HookContextWeatherForecast>
     </HookContextSearch>
    </main>
  )
}
