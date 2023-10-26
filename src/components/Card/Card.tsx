import { Card, CardContent, CardProps, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

interface CityCardProps {
  city: string;
  province: string;
  population: string;
  isVisible?: boolean;
}

interface CityCardContainerStyleProps extends CardProps {
  isVisible?: boolean;
}
const CityCardContainer = styled(Card)<CityCardContainerStyleProps>(() => ({
  width: "20%",
  height: "20%",
  margin: 10,
}));

const CityCardContent = styled(CardContent)(() => ({
  height: 50,
  margin: 5,
}));

const CityCard = forwardRef<HTMLDivElement, CityCardProps>((props, ref) => {
  const { city, province, population } = props;
  return (
    <CityCardContainer ref={ref}>
      <CityCardContent>
        <Typography variant="h6">{city}</Typography>
        <Typography>{`Province: ${province}`}</Typography>
        <Typography>{`Population: ${population}`}</Typography>
      </CityCardContent>
    </CityCardContainer>
  );
});

export default CityCard;
