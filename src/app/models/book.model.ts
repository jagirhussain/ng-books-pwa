export interface Book {
  id: string;
  volumeInfo?: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}
