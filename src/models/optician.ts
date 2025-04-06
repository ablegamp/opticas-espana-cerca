
export interface ServiceRatings {
  atencionCliente: number;
  profesionalidad: number;
  precio: number;
  variedad: number;
}

export interface OpenHours {
  [key: string]: string[];
}

export interface UserReview {
  Name: string;
  ProfilePicture: string | null;
  Rating: number;
  Description: string;
  Images: string[] | null;
  When: string;
}

export interface Optician {
  title: string;
  category: string;
  address: string;
  description: string;
  serviceRatings: ServiceRatings;
  open_hours: OpenHours;
  website: string;
  phone: string;
  review_count: number;
  review_rating: number;
  latitude: number;
  longitude: number;
  user_reviews: UserReview[];
  emails?: string;
  province: string; // Nueva propiedad para identificar la provincia
}
