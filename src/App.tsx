import styles from "./App.module.css";
import AppContainer from "./components/AppContainer/AppContainer";
import HeroWeather from "./components/HeroWeather/HeroWeather";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { useCurrentWeather } from "./services/useCurrentWeather";
import { useHourlyWeather } from "./services/useHourlyWeather";
import { roundTemperature } from "./utils/roundTemperature";
import { CurrentWeatherContext } from "./store/currentWeatherContext";

const CITY_NAME = "Skopje";

function App() {
	const {
		data: currentWeather,
		error,
		isLoading,
	} = useCurrentWeather(CITY_NAME);

	const {
		data: hourlyWeather,
		error: forecastError,
		isLoading: forecastIsLoading,
	} = useHourlyWeather();

	// Loading Spinner
	if (isLoading || forecastIsLoading || (!currentWeather && !hourlyWeather)) {
		return <LoadingScreen />;
	}

	// Error handling
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (forecastError) {
		return <div>Error: {forecastError.message}</div>;
	}

	if (!currentWeather || !hourlyWeather) {
		return <div>Failed fetching data.</div>;
	}

	const { name, main, weather } = currentWeather;

	return (
		<CurrentWeatherContext.Provider value={currentWeather}>
			<AppContainer>
				<div className={styles.hero}>
					<HeroWeather
						city={name}
						temperature={roundTemperature(main.temp)}
						description={weather[0].description}
						high={roundTemperature(main.temp_max)}
						low={roundTemperature(main.temp_min)}
					/>
				</div>
				<div className={styles.forecast}>
					<WeatherForecast hourlyWeather={hourlyWeather} />
				</div>
			</AppContainer>
		</CurrentWeatherContext.Provider>
	);
}

export default App;
