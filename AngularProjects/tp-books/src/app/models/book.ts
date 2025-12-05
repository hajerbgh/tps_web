export interface Book {
  id: number;
  title: string;
  author: string;
  publisherEmail: string;
  publisherPhone?: string;
  releaseDate: string; // 'YYYY-MM-DD'
  category: string;
  isAvailable: boolean;
  stock?: number;
}
