import * as React from 'react';
import { PolygonContext } from '../context/polygon';

export const usePolygonStore = () => React.useContext(PolygonContext);

export default usePolygonStore;
