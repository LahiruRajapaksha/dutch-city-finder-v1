import { Card, CardContent, CardProps, Typography } from "@mui/material";
import { CityData } from "../../Types/utils-types";
import { styled } from "@mui/material/styles";

interface CityCardProps extends CityData {}

const CityCard = (props: CityCardProps) => {
  const { city, province, population } = props;

  const CityCard = styled(Card)<CardProps>(() => ({
    height: 100,
    width: "20%",
    margin: 10,
  }));

  const CityCardContent = styled(CardContent)<CardProps>(() => ({
    height: 50,
    width: "100%",
  }));

  return (
    <CityCard>
      <CityCardContent>
        {/* <CardHeader title={city} /> */}
        <Typography>{city}</Typography>
        <Typography>{`Province:${province}`}</Typography>
        <Typography>{`Population:${population}`}</Typography>
      </CityCardContent>
    </CityCard>
  );
};

export default CityCard;
