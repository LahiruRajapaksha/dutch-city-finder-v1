import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface SearchBarProps {
  handleSearchCities: (cityName: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { handleSearchCities } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search for a city"
        variant="outlined"
        onChange={(e) => {
          handleSearchCities(e.target.value);
        }}
      />
    </Box>
  );
};

export default SearchBar;
