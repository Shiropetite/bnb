import type { User } from "./User";

export type Review = {
  author: User;
  createdAt: Date;
  message: string;
  rate: ReviewRate;
};

export type ReviewRate = {
  cleanliness: number;
  checkIn: number;
  location: number;
  communication: number;
  accuracy: number;
  value: number;
};
