export interface Specialist {
  id: number;
  name: string;
  age: number;
  gender: "male" | "female";
  price: number;
  duration: number;
  rating: number;
  reviewsCount: number;
  description: string;
  avatar: string;
}

export interface SpecialistsResponse {
  items: Specialist[];
  total: number;
}
