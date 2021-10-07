export default async function fetcher<T>(
	url: string,
	config: RequestInit,
): Promise<HttpResponse<T>> {
	const response: HttpResponse<T> = await fetch(url, config);
	try {
		response.parsedBody = await response.json();
	} catch (error) {}

	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return response;
}
