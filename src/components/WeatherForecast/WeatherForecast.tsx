import { useState } from "react";
import CardForecast from "../CardForecast/CardForecast";
import styles from "./weatherForecast.module.css";
import { HourlyWeatherResponse } from "@/types/forecast";
import WidgetsContainer from "../WidgetsContainer/WidgetsContainer";

export default function WeatherForecast({
	hourlyWeather,
}: {
	hourlyWeather: HourlyWeatherResponse;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`${styles.container} ${isOpen && styles.expanded}`}>
			<button
				className={styles.expandBtn}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={styles.expandIcon} />
			</button>
			<div className={styles.hourly}>
				{hourlyWeather.list.map((day) => (
					<CardForecast weather={day} key={day.dt} />
				))}
			</div>
			<WidgetsContainer />
		</div>
	);
}
