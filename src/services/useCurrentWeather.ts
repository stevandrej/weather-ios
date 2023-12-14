import { useFetch } from "@/hooks/useFetch";
import { WeatherData } from "@/types/weather";

export function useCurrentWeather(city: string = "skopje") {
	const { data, error, isLoading } = useFetch<WeatherData>(
		"weather",
		`q=${city}&units=metric`,
		{
			method: "GET",
		}
	);
	return { data, error, isLoading };
}
