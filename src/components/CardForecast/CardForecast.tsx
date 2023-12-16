import { HourlyForecast } from "@/types/forecast";
import styles from "./cardForecast.module.css";

export default function CardForecast({ weather }: { weather: HourlyForecast }) {
	const time = new Date(weather.dt * 1000).toLocaleString("en-US", {
		hour: "numeric",
		hour12: true,
	});

	return (
		<div className={styles.container}>
			<div className={styles.time}>{time}</div>
			<div className={styles.percentile}>
				<img
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt={weather.weather[0].description}
					width={32}
				/>
				<div>{Math.round(weather.pop * 100)}%</div>
			</div>
			<div>{Math.round(weather.main.temp)}&deg;</div>
		</div>
	);
}
