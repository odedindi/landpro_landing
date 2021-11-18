import { mapCenterContext } from 'context/MapCenter';
import * as React from 'react';

const useMapCenter = () => React.useContext(mapCenterContext);

export default useMapCenter;
