import {
  Box,
  Select,
  Option,
  Button,
  ModalDialog,
  Modal,
  Typography,
  CircularProgress,
} from '@mui/joy';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import stadiumImage from '../assets/images/background.jpg'; 
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stadiumIcon = new L.Icon({
  iconUrl: stadiumImage,
  iconSize: [35, 35],
  iconAnchor: [17, 34],
  popupAnchor: [0, -30],
});

const allStadiums = [

  { id: 'gazon', name: 'Gazon Stadium', lat: 41.547211, lng: 60.611858 },
  { id: 'super', name: 'Super Arena', lat: 41.549411, lng: 60.616657 },
  { id: 'victory', name: 'Victory Ground', lat: 41.549181, lng: 60.623149 },
  { id: 'south', name: 'South Stadium', lat: 41.545376, lng: 60.621383 },
];

const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [nearbyStadiums, setNearbyStadiums] = useState<typeof allStadiums>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);

          const nearby = allStadiums.filter((stadium) => {
            const dist = getDistance(latitude, longitude, stadium.lat, stadium.lng);
            return dist <= 10;
          });

          setNearbyStadiums(nearby);
          setLoading(false);
        },
        (error) => {
          console.error('Geolocation error:', error);

          const fallbackLat = 41.5534;
          const fallbackLng = 60.6202;
          setUserLocation([fallbackLat, fallbackLng]);
          setNearbyStadiums(allStadiums);
          setLoading(false);
        }
      );
    }
  }, [open]);

  const handleClick = (id: string) => {
    setOpen(false);
    navigate(`/stadium/${id}`);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">
            <span className="header-color">Gazon</span> topish endi muammo emas
          </h1>
          <p className="header-subtitle">O'zingizga eng yaqin joyni tanlang</p>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: "center",
              gap: 1.5,
              p: 1.5,
              borderRadius: '12px',
              boxShadow: 'sm',
              width: '100%',
              mx: 'auto',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="solid"
              color="success"
              className='header-buttons'
              onClick={() => setOpen(true)}
              sx={{
                px: 3,
                borderRadius: '12px',
                backgroundColor: '#1DB954',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#1AAE4D',
                },
              }}
            >
              <FaMapMarkedAlt fontSize={22} /> Xarita orqali qidirish
            </Button>

            <Modal open={open} onClose={() => setOpen(false)}>
              <ModalDialog layout="fullscreen" sx={{ p: 2 }}>
                <Typography level="h3" mb={2}>
                  Yaqin atrofdagi maydonlar
                </Typography>

                {loading || !userLocation ? (
                  <CircularProgress />
                ) : (
                  <MapContainer
                    center={userLocation}
                    zoom={14}
                    style={{ height: '80vh', width: '100%' }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker position={userLocation}>
                      <Popup>Siz shu yerdasiz</Popup>
                    </Marker>

                    {nearbyStadiums.map((stadium) => (
                      <Marker
                        key={stadium.id}
                        position={[stadium.lat, stadium.lng]}
                        icon={stadiumIcon}
                      >
                        <Popup>
                          <Typography
                            onClick={() => handleClick(stadium.id)}
                            sx={{ cursor: 'pointer', color: '#1DB954' }}
                          >
                            {stadium.name}
                          </Typography>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}
              </ModalDialog>
            </Modal>

            <Select
              placeholder="Shahringizni tanlang"
              indicator={<FaLocationDot/>}
              size="md"
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: '7px',
                width: '225px ',
                backgroundColor: 'transparent',  
                backdropFilter: 'blur(6px)',                
                borderRadius: '8px',                    
                border: '1px solid rgba(255, 255, 255, 0.3)', 
                color: "#fff",
                zIndex: "1",

                '&:hover': {
                  backgroundColor: 'transparent',
                  opacity: "0.8"
                },
              }}
            >
              <Option value="urganch">Urganch</Option>
              <Option value="xiva">Xiva</Option>
              <Option value="yangiariq">Yangiariq</Option>
            </Select>
          </Box>
        </div>
      </div>
    </header>
  );
};

export default Header;
