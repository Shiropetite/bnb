import type { Review } from "./Review";

export type User = {
  firstName: string;
  lastName: string;
  profilePicture?: string;
  createdAt: Date;
  identityVerified: boolean;
};

export type Owner = User & {
  isProfessional: boolean;
  description?: string;
  languages: string[];
  responseRate: number;
  responseTime: string;
  reviews: Review[];
};
