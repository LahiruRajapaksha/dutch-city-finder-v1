export interface ResponseData {
    city: string;
    lat: string;
    lng: string;
    country: string;
    iso2: string;
    admin_name: string;
    capital: string;
    population: string;
    population_proper: string;
}

export interface CityData {
    city: string;
    province: string;
    population: string;
}

export interface CityDataList {
    cities: CityData[];
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
}