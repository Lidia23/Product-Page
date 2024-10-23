export type PostData = {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  thumbnail: string;
};

export type ApiResponse = {
  products: PostData[];
  total: number;
  skip: number;
  limit: number;
};
