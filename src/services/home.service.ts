import { AmenityCategory } from "@/models/Amenity";
import { Bed } from "@/models/Bedroom";
import type { Home } from "@/models/Home";
import { HomeCategory } from "@/models/HomeCategory";

export const getHomes = async (): Promise<Home[]> => {
  return Promise.resolve([]);
};

export const getHomeById = async (id: string): Promise<Home> => {
  return Promise.resolve({
    id,
    title: "Maison Universe",
    description:
      "Maison très calme (depuis que j'ai mis la paix sur la galaxy :)). Vue sur la plage. Vous pouvez vous baigner mais attention au Steven Melon qui vienne parfois bronzer lors de leur migration.",
    ownerDescription:
      "Je vous préparerais des pancakes tout les jours, je peux vous faire visiter Beach City à dos de Lion !",
    location: {
      address1: "",
      city: "Beach City",
      country: "Terre",
      latitude: 0,
      longitude: 0,
    },
    homeCategory: HomeCategory.HOME,
    capacity: 2,
    nbRooms: 1,
    nbBeds: 1,
    nbBathrooms: 1,
    price: 62,
    aircover: true,
    bedrooms: [
      {
        imageUrl:
          "https://i.pinimg.com/736x/16/be/73/16be733fbd0fadb0fb4007d9efaf4199.jpg",
        beds: [Bed.DOUBLE_BED],
      },
    ],
    amenities: [
      {
        name: "Vue sur la mer",
        isAvailable: true,
        icons: "beach",
        category: AmenityCategory.LOCATION_FEATURES,
      },
      {
        name: "Équipement de base",
        isAvailable: true,
        icons: "base-equipment",
        category: AmenityCategory.BEDROOM_AND_LAUNDRY,
      },
      {
        name: "Cuisine",
        isAvailable: true,
        icons: "kitchen",
        category: AmenityCategory.KITCHEN_AND_DINING,
      },
      {
        name: "Wifi",
        isAvailable: true,
        icons: "wifi",
        category: AmenityCategory.INTERNET_AND_OFFICE,
      },
      {
        name: "Télévision",
        isAvailable: true,
        icons: "television",
        category: AmenityCategory.ENTERTAINMENT,
      },
      {
        name: "Baignoire",
        isAvailable: true,
        icons: "bathtub",
        category: AmenityCategory.BATHROOM,
      },
      {
        name: "Savon pour le corps",
        isAvailable: true,
        icons: "body-soap",
        category: AmenityCategory.BATHROOM,
      },
      {
        name: "Eau chaude",
        isAvailable: true,
        icons: "hot-water",
        category: AmenityCategory.BATHROOM,
      },
      {
        name: "Console de jeu",
        isAvailable: true,
        icons: "game",
        category: AmenityCategory.ENTERTAINMENT,
      },
      {
        name: "Climatisation",
        isAvailable: false,
        icons: "air-conditioner",
        category: AmenityCategory.HEATING_AND_COOLING,
      },
    ],
    photos: [
      {
        url: "https://cdn.theatlantic.com/thumbor/nuDWySQsKEjTkjxOcuB7VGWkTj0=/156x44:1920x1036/960x540/media/img/mt/2017/07/53546_steven_universe/original.jpg",
        index: 1,
      },
      {
        url: "https://rare-gallery.com/uploads/posts/921824-Steven-Universe-Steven-Universe-TV-Show-Cartoon-Network.jpg",
        index: 2,
      },
      {
        url: "https://i.pinimg.com/originals/de/8f/10/de8f1046d7b4503153857d05f7f5dc9b.jpg",
        index: 3,
      },
      {
        url: "https://i.pinimg.com/736x/16/be/73/16be733fbd0fadb0fb4007d9efaf4199.jpg",
        index: 4,
      },
      {
        url: "https://i.pinimg.com/originals/25/61/8b/25618b433796a517acb89ca026c5fc4b.png",
        index: 5,
      },
      {
        url: "https://64.media.tumblr.com/c296c31aead1677949a9c069262a9af3/tumblr_o1vm626Z2D1ufkj40o1_1280.png",
        index: 6,
      },
    ],
    reviews: [
      {
        author: {
          firstName: "Garnet",
          lastName: "",
          profilePicture:
            "https://img.buzzfeed.com/buzzfeed-static/static/2016-09/19/0/asset/buzzfeed-prod-web12/sub-buzz-5097-1474261116-1.png?crop=906%3A907%3B333%2C0&downsize=900:*&output-format=auto&output-quality=auto",
          createdAt: new Date(),
          identityVerified: false,
        },
        createdAt: new Date(),
        message: "👍",
        rate: {
          cleanliness: 5,
          checkIn: 5,
          location: 5,
          communication: 5,
          accuracy: 5,
          value: 5,
        },
      },
      {
        author: {
          firstName: "Amethyst",
          lastName: "",
          profilePicture:
            "http://pm1.narvii.com/7087/07b0813248c9ad2f89ee167177989a040d52c948r1-1308-1213v2_uhq.jpg",
          identityVerified: false,
          createdAt: new Date(),
        },
        createdAt: new Date(),
        message:
          "J'adoooore cette maison xoxo !!! PS: J'ai mangé les derniers cookies cat :) Bisous Steven",
        rate: {
          cleanliness: 5,
          checkIn: 5,
          location: 5,
          communication: 5,
          accuracy: 5,
          value: 5,
        },
      },
      {
        author: {
          firstName: "Pearl",
          lastName: "",
          profilePicture:
            "http://pm1.narvii.com/7519/d8a4857966ee4fbcd23c74214a1b7381c3c6bab7r1-500-500v2_00.jpg",
          createdAt: new Date(),
          identityVerified: true,
        },
        createdAt: new Date(),
        message:
          "Cette maison correspond parfaitement à la description !. De plus l'hôte est très agréable, il prépare les meilleurs petits déjeuner (je ne peux pas manger donc je ne peux pas témoigner sur leur goût majestueux). La vue sur la plage est incroyable surtout depuis que les deux vaiseaux des diamants ce sont écrasé",
        rate: {
          cleanliness: 5,
          checkIn: 5,
          location: 5,
          communication: 5,
          accuracy: 5,
          value: 5,
        },
      },
    ],
    owner: {
      firstName: "Steven",
      lastName: "Universe",
      profilePicture:
        "https://cn.i.cdn.ti-platform.com/cnapac/content/762/showpage/steven-universe/in/showicon.png",
      createdAt: new Date(),
      isProfessional: false,
      identityVerified: true,
      description:
        "Membre des Gemmes de Cristal.\nMa mission protéger l'humanité et aider les personnes qui en ont besoin, ainsi qu'aller chez le psy pour mes traumas.",
      languages: ["English"],
      responseRate: 0.8,
      responseTime: "journée",
      reviews: [],
    },
  });
};
