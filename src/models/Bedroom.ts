export type Bedroom = {
  imageUrl: string;
  beds: Bed[];
}

export enum Bed {
  KING_BED = "lit king size",
  QUEEN_BED = "lit queen size",
  DOUBLE_BED = "lit double",
  SINGLE_BED = "lit simple",
  BUNK_BED = "lit superposé",
}