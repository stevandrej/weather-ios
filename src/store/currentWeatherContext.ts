import { WeatherData } from "@/types/weather";
import { createContext } from "react";

export const CurrentWeatherContext = createContext<WeatherData | null>(null);
