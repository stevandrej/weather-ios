import AppContainer from "./components/AppContainer/AppContainer";
import HeroWeather from "./components/HeroWeather/HeroWeather";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import styles from "./App.module.css";
import { useFetch } from "./hooks/useFetch";
import { WeatherData } from "./types/weather";
import Spinner from "./components/Spinner/Spinner";

function App() {

	const { data, error, isLoading } = useFetch<WeatherData>(
		"q=skopje&units=metric",
		{
			method: "GET",
		}
	);

	if (isLoading) return <Spinner />;

	return (
		<AppContainer>
			{error ? (
				<div>Error: {error.toString()}</div>
			) : !data ? (
				<div>Failed fetching data.</div>
			) : (
				<>
					<div className={styles.hero}>
						<HeroWeather
							city={data.name}
							temperature={Math.round(data.main.temp)}
							status={data.weather[0].description}
							high={Math.round(data.main.temp_max)}
							low={Math.round(data.main.temp_min)}
						/>
					</div>
					<div className={styles.forecast}>
						<WeatherForecast />
					</div>
				</>
			)}
		</AppContainer>
	);
}

export default App;
