type Zoom = number;

type Latitude = number;
type Longitude = number;

type GeoLocation = { latitude: Latitude; longitude: Longitude };

type LeafletGeolocation = { lat: Latitude; lng: Longitude };
type LeafletGeometryElement = { id: number; latlngs: LeafletGeolocation[] };

type LatLngCoordinates = [Latitude, Longitude];
type LngLatCoordinates = [Longitude, Latitude];

type Coordinates = LatLngCoordinates | LngLatCoordinates;

type NewlyCreatedGeoJSON = {
	type: string;
	features: Array<{
		type: string;
		properties: {
			id: string | number;
		};
		geometry: {
			type: string;
			coordinates: Coordinates[][];
		};
	}>;
};
interface HttpResponse<T> extends Response {
	parsedBody?: T;
}

type AnalyzedFeature = {
	id: string;
	type: 'Feature';
	properties: {
		id: string;
		land_cover: LandCover;
		soil_co_estimates: number | null;
		veg_co_estimates: number | null;
	};
	geometry: {
		type: 'Polygon';
		coordinates: Coordinates[][];
	};
};
type NewGeoJSONResponse = {
	id: number;
	created: string;
	updated: string;
	coordinates: {
		type: 'FeatureCollection';
		features: Array<{
			type: 'Feature';
			properties: {
				id: number;
			};
			geometry: {
				type: 'Polygon';
				coordinates: Coordinates[][];
			};
		}>;
	};
	data: {
		type: 'FeatureCollection';
		features: Array<AnalyzedFeature>;
	};
};

type LandCover =
	| 'main'
	| 'Unknown'
	| 'Shrubs'
	| 'Grasses'
	| 'Agriculture'
	| 'Built-up'
	| 'Bare'
	| 'Snow-Ice'
	| 'Water'
	| 'Wetland'
	| 'Lichens'
	| 'Closed forest'
	| 'Evergreen-needle-leaf'
	| 'Evergreen-broad-leaf'
	| 'Deciduous-needle-leaf'
	| 'Deciduous-broad-leaf'
	| 'Mixed-closed-forest'
	| 'Other-closed-forest'
	| 'Open-forest'
	| 'Evergreen-needle-leaf'
	| 'Evergreen-broad-leaf'
	| 'Deciduous-needle-leaf'
	| 'Deciduous-broad-leaf'
	| 'Mixed'
	| 'Other-open-forest'
	| 'Oceans';

type SubPolygonOnShowList = {
	id: string | number;
	polygonName: string;
	landCover: LandCover;
	coordinates: Coordinates[][];
	soil_co_estimates: number;
	veg_co_estimates: number;
	geometry: {
		type: string;
		coordinates: Coordinates[][];
	};
	area: {
		m2: number;
		ha: number;
	};
};
