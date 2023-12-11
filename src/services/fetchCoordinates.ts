export async function fetchCoordinates(
	city: string
): Promise<{ lat: number; lon: number }> {
	const response = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
			import.meta.env.VITE_APP_API_KEY
		}`
	);
	if (!response.ok) {
		throw new Error(
			`Failed to fetch coordinates. Status: ${response.status}`
		);
	}
	const result = await response.json();
	return { lat: result.lat, lon: result.lon };
}
