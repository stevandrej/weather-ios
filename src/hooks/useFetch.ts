import { BASE_URL } from "@/config/apiConfig";
import { useEffect, useState } from "react";

interface FetchResult<T> {
	data: T | undefined;
	isLoading: boolean;
	error: unknown;
}

export function useFetch<T>(url: string, options: RequestInit): FetchResult<T> {
	const completeUrl = `${BASE_URL}&${url}`;

	const [data, setData] = useState<T|undefined>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		const fetchData = async () => {
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
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		data,
		isLoading,
		error,
	};
}
