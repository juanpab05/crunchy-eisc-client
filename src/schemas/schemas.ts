export type Movie = {
  id: string;
  title: string;
  description: string;
  film: {
    filmURL: string;
    filmID: string;
  };
  poster: {
    posterURL: string;
    posterID: string;
  };
  genres: string[];
  tags: string[];
  directors: string[];
  actors: string[];
  duration: number;
  releaseDate: string;
  rating: number;
};
