import type { Bedroom } from "./Bedroom";
import type { HomeCategory } from "./HomeCategory";
import type { Location } from "./Location";
import type { Photo } from "./Photos";
import type { Amenity } from "./Amenity";
import type { Review, ReviewRate } from "./Review";
import type { Owner } from "./User";

export type Home = {
  id: string;
  title: string;
  description: string;
  ownerDescription?: string;
  location: Location;
  homeCategory: HomeCategory;
  capacity: number;
  nbRooms: number;
  nbBeds: number;
  nbBathrooms: number;
  price: number; // TODO: Remove when calendar
  aircover: boolean;
  bedrooms: Bedroom[];
  amenities: Amenity[];
  photos: Photo[];
  reviews: Review[];
  owner: Owner;
};

export const getTotalScore = (reviews?: Review[]) => {
  if (!reviews) return 0;
  return reviews
    .map((e) =>
      Object.values(e.rate).reduce(
        (previous: number, current: number) => (previous + current) / 2
      )
    )
    .reduce((previous, current) => (previous + current) / 2);
};

export const getKeySore = (key: keyof ReviewRate, reviews?: Review[]) => {
  if (!reviews) return 0;
  return reviews
    .map((e) => e.rate[key])
    .reduce((previous, current) => (previous + current) / 2);
};
