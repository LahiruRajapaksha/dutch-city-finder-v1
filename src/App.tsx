import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchBar from "./components/Search/Search";
import { Suspense, lazy, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const CityCard = lazy(() => import("./components/Card/Card"));

  const handleSearchCities = (cityName: string) => {
    setSearchTerm(cityName);
  };
  return (
    <Box display="flex" flexDirection="column" boxSizing="border-box">
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="center" mt={4} mb={4}>
          <Typography variant="h2">Dutch Cities</Typography>
        </Box>
        <SearchBar handleSearchCities={handleSearchCities} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexGrow={1}
        height={600}
        overflow="auto"
      >
        <Suspense fallback={<CircularProgress />}>
          <CityCard searchTerm={searchTerm} />
        </Suspense>
      </Box>
    </Box>
  );
}

export default App;
