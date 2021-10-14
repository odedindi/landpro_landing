type UserGeometry = {
	polygonState: PolygonState;
	polygonDispatch: React.Dispatch<PolygonActionType>;
};
type MapGeometry = {
	mapMarkings: LeafletGeometryElement[];
	setMapMarkings: React.Dispatch<
		React.SetStateAction<LeafletGeometryElement[]>
	>;
};
interface PolygonContextType {
	userGeometry: UserGeometry;
	mapGeometry: MapGeometry;
}
