import { useState } from "react";

type Location = {
  lat: number;
  lon: number;
  status: string;
};

const useLocation = () => {
  const [coords, setCoords] = useState<Location>({
    lat: 0,
    lon: 0,
    status: "",
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setCoords({
        ...coords,
        status: "Geolocation is not supported by your browser",
      });
    } else {
      setCoords({ ...coords, status: "Locating..." });
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          ...coords,
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          status: "",
        });
      });
    }
    setCoords({ ...coords, status: "Unable to retrieve your location" });
  };

  return {getLocation, coords};
};

export default useLocation;
