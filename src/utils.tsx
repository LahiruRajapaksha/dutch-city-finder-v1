// import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CityData, CityDataList } from "./Types/utils-types";
// import { DutchCityFetchData } from './types/utils-types';

// Constants
export const BASE_URL = "https://simplemaps.com";

// Create an axios client
// const axiosClient = axios.create({
//   baseURL: BASE_URL,
// });

// Data fetching function
const fetchDutchCities = async () => {
  try {
    const response = await fetch("/static/data/country-cities/nl/nl.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const cityData = await response.json();
    return cityData;
  } catch (error) {
    console.error(error);
  }

  // axiosClient
  //   .get("/static/data/country-cities/nl/nl.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Acess-Control-Allow-Origin": "*",
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
};

// Custom hook using react-query
export const useFetchDutchCities = (): CityDataList => {
  let cities: CityData[] = [];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getDutchCitiesQuery"],
    queryFn: () => fetchDutchCities(),
  });
  if (!isLoading && !isError && data) {
    cities = data?.map((element) => ({
      city: element?.city,
      province: element?.admin_name,
      population: element?.population,
    }));
  }
  return { cities, isLoading, isError };
};
