import { useFetch } from "@/hooks/useFetch";
import { HourlyWeatherResponse } from "@/types/forecast";

export function useHourlyWeather(city: string = "skopje") {
	const { data, error, isLoading } = useFetch<HourlyWeatherResponse>(
		"forecast",
		`q=${city}&units=metric&cnt=5`,
		{
			method: "GET",
		}
	);
	return { data, error, isLoading };
}
