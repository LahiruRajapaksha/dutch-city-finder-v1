import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useRef } from "react";
interface SearchBarProps {
  handleSearchCities: (cityName: string) => void;
}

const CustomTextField = styled(TextField)({
  width: "30%",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "green",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const SearchBar = (props: SearchBarProps) => {
  const { handleSearchCities } = props;
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <CustomTextField
        inputRef={inputRef}
        id="outlined-basic"
        placeholder="Search for a city"
        size="small"
        variant="outlined"
        onChange={(e) => {
          handleSearchCities(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
