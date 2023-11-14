import React, { createContext, useContext, useState } from 'react';

const PathTrackingContext = createContext();

export const PathTrackingProvider = ({ children }) => {
  const [trackedPaths, setTrackedPaths] = useState([]);

  const trackPath = (path) => {

    setTrackedPaths((prevPaths) => [...prevPaths, { path, timestamp: new Date() }]);
  };
  console.log('PathTrackingProvider rendered')
  return (
    <PathTrackingContext.Provider value={{ trackedPaths, trackPath }}>
      {children}
    </PathTrackingContext.Provider>
  );
};

export const usePathTracking = () => useContext(PathTrackingContext);