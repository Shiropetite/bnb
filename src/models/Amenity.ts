export type Amenity = {
  name: string;
  isAvailable: boolean;
  icons?: string; // TODO: Remove once translations done
  category: AmenityCategory;
};

export enum AmenityCategory {
  BATHROOM = "Salle de bain",
  BEDROOM_AND_LAUNDRY = "Chambre et linge",
  ENTERTAINMENT = "Divertissement",
  FAMILY = "Famille",
  HEATING_AND_COOLING = "Chauffage et climatisation",
  HOME_SAFETY = "Sécurite à la maison",
  INTERNET_AND_OFFICE = "Internet et bureau",
  KITCHEN_AND_DINING = "Cuisine et salle à manger",
  LOCATION_FEATURES = "Caractéristiques de l'emplacement",
  OUTDOOR = "Extérieur",
  PARKING_AND_FACILITIES = "Parking et installations",
  SERVICES = "Services",
}
