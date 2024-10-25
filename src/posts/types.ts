export type PostData = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  minimumOrderQuantity: number;
  returnPolicy: string;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: number;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

export type ApiResponse = {
  products: PostData[];
  total: number;
  skip: number;
  limit: number;
};
