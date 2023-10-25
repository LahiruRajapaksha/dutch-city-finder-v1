import { CityData } from "../../types/utils-types";
import { useEffect, useRef } from "react";
import { useFetchDutchCities } from "../../utils";
import CityCard from "../Card/Card";
import "./CardList.css";
interface CityCardProps {
  searchTerm: string;
}

const CityCardList = (props: CityCardProps) => {
  const { searchTerm } = props;
  const { cities } = useFetchDutchCities();
  const cardRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        console.log("entries", entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cardShow");
            cardObserver.unobserve(entry.target);
          } else {
            entry.target.classList.remove("cardShow");
          }
        });
      },
      { threshold: 0.5, rootMargin: "-50px" }
    );
    if (cardRef.current)
      cardRef.current.forEach((ref) => cardObserver.observe(ref));
  }, [cardRef, cities]);

  return cities
    ?.filter((cityData) =>
      cityData.city.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((city: CityData, index: number) => (
      <CityCard
        ref={(e) => (cardRef.current[index] = e!)}
        key={city.city}
        city={city.city}
        province={city.province}
        population={city.population}
      />
    ));
};

export default CityCardList;
