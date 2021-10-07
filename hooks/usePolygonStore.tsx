import * as React from 'react';
import { PolygonContext } from '../context/polygon';

const usePolygonStore = () => React.useContext(PolygonContext);

export { usePolygonStore };
