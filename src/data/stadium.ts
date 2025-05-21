import type { Stadiums } from '../types/StadiumType';

export const useStadium = (): Stadiums => {
  return {
    urganch: {
      city: "Urganch",
      name: "Urganch Stadium",
      price: 2,
      location: "Urganch, Uzbekistan",
      length: 3,
    },
    xiva: {
      city: "Xiva",
      name: "Xiva Arena",
      price: 2,
      location: "Xiva, Uzbekistan",
      length: 3,
    },
    yangiariq: {
      city: "Yangiariq",
      name: "Yangiariq Ground",
      price: 2,
      location: "Yangiariq, Uzbekistan",
      length: 3,
    },
  };
};
