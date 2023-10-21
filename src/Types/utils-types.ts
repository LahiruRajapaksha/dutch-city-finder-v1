

export interface CityData {
    city: string;
    province: string;
    population:string;
}

export interface CityDataList { 
    cities: CityData[];
    isLoading: boolean;
    isError: boolean;
}