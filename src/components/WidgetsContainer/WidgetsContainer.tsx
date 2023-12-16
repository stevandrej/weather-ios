import { useContext } from "react";
import Widget from "../Widget/Widget";
import styles from "./widgetsContainer.module.css";
import { CurrentWeatherContext } from "@/store/currentWeatherContext";
import { convertUnixTimeToLocaleString } from "@/utils/convertUnixTimeToLocaleString";

export default function WidgetsContainer() {
	const weather = useContext(CurrentWeatherContext);
	if (!weather) return null;

	return (
		<div className={styles.container}>
			<Widget title="Humidity" main={weather.main.humidity} />
			<Widget title="Pressure" main={weather.main.pressure} />
			<Widget
				title="Sunrise"
				main={convertUnixTimeToLocaleString(weather.sys.sunrise)}
				description={`Sunset: ${convertUnixTimeToLocaleString(
					weather.sys.sunset
				)}`}
			/>
			<Widget
				title="Wind"
				main={weather.wind.speed}
				description={`${weather.wind.deg} deg`}
			/>
		</div>
	);
}
