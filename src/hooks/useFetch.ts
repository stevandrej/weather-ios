import { BASE_URL, API_KEY } from "@/config/apiConfig";
import { useCallback, useEffect, useState } from "react";

interface FetchResult<T> {
	data: T | undefined;
	isLoading: boolean;
	error: {
		message: string | null;
		name: string | null;
	} | null;
}

type targetEndpointType = "forecast" | "weather";

export function useFetch<T>(
	targetEndpoint: targetEndpointType,
	urlParams: string,
	options: RequestInit
): FetchResult<T> {
	const completeUrl = `${BASE_URL}/${targetEndpoint}?appid=${API_KEY}&${urlParams}`;

	const [data, setData] = useState<T | undefined>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<{
		message: string | null;
		name: string | null;
	} | null>(null);

	const fetchData = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await fetch(completeUrl, options);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const result = await response.json();
			setData(result);
			setError(null);
		} catch (err: unknown) {
			setError({
				message: error instanceof Error ? error.message : null,
				name: error instanceof Error ? error.name : null,
			});
		} finally {
			setIsLoading(false);
		}
	}, [completeUrl, error, options]);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		data,
		isLoading,
		error,
	};
}
