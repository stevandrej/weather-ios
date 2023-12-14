import CardForecast from "../CardForecast/CardForecast";
import styles from "./weatherForecast.module.css";
import { HourlyWeatherResponse } from "@/types/forecast";

export default function WeatherForecast({
	hourlyWeather,
}: {
	hourlyWeather: HourlyWeatherResponse;
}) {
	return (
		<div className={styles.container}>
			{hourlyWeather.list.map((day) => (
				<CardForecast weather={day} key={day.dt} />
			))}
		</div>
	);
}
