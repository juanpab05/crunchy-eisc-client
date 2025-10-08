/**
 * Movies listing page.
 *
 * @component
 * @returns {JSX.Element} A heading for the movies section.
 * @remarks
 * Extend this component to fetch and render movie cards or a grid.
 */

import React, { useEffect, useState } from "react";
import "./MoviePage.css";
import { fetchApiJson } from "../../api/movie";
import type { Movie } from "../../schemas/schemas";

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchApiJson();
        
        setMovies(res.data || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message + "Error fetching movies");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div>Cargando películas...</div>;
  if (error) return <div>Error: {error}</div>;
  if (movies.length === 0) return <div>No hay películas disponibles.</div>;

  return (
    <div className="min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Películas</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white rounded-2xl shadow-lg p-4 w-80 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">{movie.title}</h3>

            <video
              src={movie.film.filmURL}
              poster={movie.poster.posterURL}
              controls
              className="rounded-lg w-full h-48 object-cover mb-3"
            />

            <p className="text-sm text-gray-300 mb-2 line-clamp-3">{movie.description}</p>

            <p className="text-sm">
              <strong>Géneros:</strong> {movie.genres.join(", ")}
            </p>

            <p className="text-sm mt-1">
              <strong>Rating:</strong> {movie.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
