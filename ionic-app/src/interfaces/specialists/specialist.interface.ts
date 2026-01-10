export interface AvailableSlot {
  label: string;
  date: string;
}

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
  experience: number;
  clients: number;
  sessions: number;
  countryFlag: string;
  isVerified: boolean;
  badge: string;
  availableSlots: AvailableSlot[];
}

export interface SpecialistsResponse {
  items: Specialist[];
  total: number;
}
