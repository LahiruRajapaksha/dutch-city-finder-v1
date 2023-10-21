import Box from "@mui/material/Box";
import CityCard from "./components/Card/Card";
import { useFetchDutchCities } from "./utils";
import Typography from "@mui/material/Typography";
import SearchBar from "./components/Search/Search";
import { useState, useEffect } from "react";
import { CityData } from "./Types/utils-types";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cities, isLoading, isError } = useFetchDutchCities();
  const [searchCities, setSearchCities] = useState<CityData[]>(cities);

  useEffect(() => {
    setSearchCities(cities);
  }, [cities]);

  const handleSearchCities = (cityName: string) => {
    setSearchCities(
      cities?.filter((cityData) => cityData.city.includes(cityName))
    );
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1">Dutch Cities</Typography>
        </Box>
        <SearchBar handleSearchCities={handleSearchCities} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {isLoading && <CircularProgress />}
        {!isLoading &&
          searchCities?.map((city) => (
            <CityCard
              key={city.city}
              city={city.city}
              province={city.province}
              population={city.population}
            />
          ))}
      </Box>
    </Box>
  );
}

export default App;
