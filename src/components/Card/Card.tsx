import { Card, CardContent, CardProps, Typography } from "@mui/material";
import { CityData } from "../../types/utils-types";
import { styled } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import { useFetchDutchCities } from "../../utils";
import "./Card.css";
interface CityCardProps {
  searchTerm: string;
}

const CityCard = (props: CityCardProps) => {
  const { searchTerm } = props;
  const { cities } = useFetchDutchCities();
  const cardRef = useRef<HTMLDivElement[]>([]);

  const CityCard = styled(Card)<CardProps>(() => ({
    width: "20%",
    height: "20%",
    margin: 10,
    opacity: 0,
  }));

  const CityCardContent = styled(CardContent)<CardProps>(() => ({
    height: 50,
    margin: 5,
  }));

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-show");
            cardObserver.unobserve(entry.target);
          } else {
            entry.target.classList.remove("card-show");
          }
        });
      },
      { threshold: 0.5, rootMargin: "-200px" }
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
        className={`card ${
          city.city.toLowerCase().includes(searchTerm.toLowerCase())
            ? "card-show"
            : ""
        }`}
      >
        <CityCardContent>
          <Typography variant="h6">{city.city}</Typography>
          <Typography>{`Province: ${city.province}`}</Typography>
          <Typography>{`Population: ${city.population}`}</Typography>
        </CityCardContent>
      </CityCard>
    ));
};

export default CityCard;
