export function convertUnixTimeToLocaleString(unixTime: number) {
	const date = new Date(unixTime * 1000);

	return date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
}
