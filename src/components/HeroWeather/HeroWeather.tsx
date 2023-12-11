import styles from "./heroWeather.module.css";

interface HeroWeatherProps {
	city: string;
	temperature: number;
	status: string;
	high: number;
	low: number;
}

export default function HeroWeather({
	city,
	temperature,
	status,
	high,
	low,
}: HeroWeatherProps) {
	return (
		<div className={styles.container}>
			<div className="large">{city}</div>
			<div className={styles.temp}>{temperature}&deg;</div>
			<div>
				<div className={styles.status}>{status}</div>
				<div className={styles["hi-low"]}>
					<span>H:{high}&deg;</span>
					<span>L:{low}&deg;</span>
				</div>
			</div>
		</div>
	);
}
