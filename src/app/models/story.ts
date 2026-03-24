export interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
  year?: number;
  genre?: string;
  imageUrl?: string;
}
