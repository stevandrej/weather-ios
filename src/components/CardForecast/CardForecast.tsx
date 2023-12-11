import styles from "./cardForecast.module.css";
import IconMoonWind from "@/assets/icons/moon-wind.png";

export default function CardForecast() {
	return (
		<div className={styles.container}>
			<div className={styles.time}>12 AM</div>
			<div className={styles.percentile}>
				<img src={IconMoonWind} alt="weather forecast" width={32} />
				<div>30%</div>
			</div>
			<div>19&deg;</div>
		</div>
	);
}
