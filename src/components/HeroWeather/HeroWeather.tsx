import styles from "./heroWeather.module.css";

interface HeroWeatherProps {
	city: string;
	temperature: number;
	description: string;
	high: number;
	low: number;
}

export default function HeroWeather({
	city,
	temperature,
	description,
	high,
	low,
}: HeroWeatherProps) {
	return (
		<div className={styles.container}>
			<div className="large">{city}</div>
			<div className={styles.temp}>{temperature}&deg;</div>
			<div className={styles.desciptionContainer}>
				<div className={styles.description}>{description}</div>
				<div className={styles.hiLow}>
					<span>H:{high}&deg;</span>
					<span>L:{low}&deg;</span>
				</div>
			</div>
		</div>
	);
}
