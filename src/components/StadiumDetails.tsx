import { useParams } from 'react-router-dom';
import { Typography } from '@mui/joy';

const stadiums = {
  gazon: {
    name: 'Gazon Stadium',
    description: 'Bu yerda katta sun’iy maydon mavjud...',
  },
  super: {
    name: 'Super Arena',
    description: 'Yangi qurilgan zamonaviy stadion...',
  },
  victory: {
    name: 'Victory Ground',
    description: 'Victory Ground - jamoaviy o‘yinlar uchun juda qulay.',
  },
};

const StadiumDetails = () => {
  const { id } = useParams();
  const stadium = stadiums[id as keyof typeof stadiums];

  if (!stadium) return <Typography>Stadion topilmadi!</Typography>;

  return (
    <div className="container">
      <Typography level="h2" mb={1}>{stadium.name}</Typography>
      <Typography>{stadium.description}</Typography>
    </div>
  );
};

export default StadiumDetails;