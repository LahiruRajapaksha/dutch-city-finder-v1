/* eslint-disable @typescript-eslint/no-unused-vars */
import { CityData } from "../../types/util-types";
import { useEffect, useRef } from "react";
import { useFetchDutchCities } from "../../utils/utils";
import CityCard from "../Card/Card";
import "./CardList.css";
import ErrorCard from "../ErrorCard/ErrorCard";
interface CityCardProps {
  searchTerm: string;
}

const CityCardList = (props: CityCardProps) => {
  const { searchTerm } = props;
  const { cities, isError, refetch, isLoading } = useFetchDutchCities();
  const cardRef = useRef<HTMLDivElement[]>([]);
  const filteredCities = cities?.filter((cityData) =>
    cityData.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("cardHide");
            entry.target.classList.add("cardShow");
            // cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5, rootMargin: " -50px" }
    );
    if (cardRef.current)
      cardRef.current.forEach((ref) => {
        ref.classList.add("cardHide");
        cardObserver.observe(ref);
      });
  }, [cardRef, cities]);

  return (
    <>
      {isError && <ErrorCard open={isError} refetch={refetch} />}
      {filteredCities?.length > 0
        ? filteredCities.map((cityData: CityData, index: number) => (
            <CityCard
              key={index}
              ref={(element: HTMLDivElement) => {
                cardRef.current[index] = element;
              }}
              city={cityData.city}
              province={cityData.province}
              population={cityData.population}
            />
          ))
        : !isLoading && (
            <div className="no-results">
              <h2>No results found</h2>
            </div>
          )}
    </>
  );
};

export default CityCardList;
