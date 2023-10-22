import CityCard from "./components/Card/Card";
import { Box } from "@mui/material";
import { useFetchDutchCities } from "./utils";
import Typography from "@mui/material/Typography";
import SearchBar from "./components/Search/Search";
import { useState, useEffect } from "react";
import { CityData } from "./Types/utils-types";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const { cities, isLoading } = useFetchDutchCities();
  const [searchCities, setSearchCities] = useState<CityData[]>(cities);

  useEffect(() => {
    setSearchCities(cities);
  }, [cities]);

  const handleSearchCities = (cityName: string) => {
    setSearchCities(
      cities?.filter((cityData) =>
        cityData.city.toLowerCase().includes(cityName.toLowerCase())
      )
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f3f3f3",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
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
            mt: 4,
            mb: 4,
          }}
        >
          <Typography variant="h2">Dutch Cities</Typography>
        </Box>
        <SearchBar handleSearchCities={handleSearchCities} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          overflow: "auto",
        }}
      >
        {isLoading && (
          <Box mt={5} height={100}>
            <CircularProgress />
          </Box>
        )}
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
