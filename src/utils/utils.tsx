import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CityData, CityDataList, ResponseData } from "../types/utils-types";
import { useMemo } from "react";

// Constants
export const BASE_URL = "http://localhost:5173";

// Create an axios client
const axiosClient = axios.create({
  baseURL: BASE_URL,
});

// Data fetching function
// If we need to abort the api call we need to pass the signal
// object to the query function
const fetchDutchCities = (signal?: AbortSignal) =>
  axiosClient
    .get("/static/data/country-cities/nl/nl.json", { signal })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });

// Custom hook using react-query
export const useFetchDutchCities = (): CityDataList => {
  let cities: CityData[] = [];

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["getDutchCitiesQuery"],
    queryFn: () => fetchDutchCities(),
  });

  cities = useMemo(() => {
    if (data) {
      return data.map((element: ResponseData) => ({
        city: element?.city,
        province: element?.admin_name,
        population: element?.population,
      }));
    }
  }, [data]);

  return { cities, isLoading, isError, refetch };
};
