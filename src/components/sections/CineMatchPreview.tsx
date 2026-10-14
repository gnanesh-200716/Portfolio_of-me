import React, { useState } from 'react';
import { Film, Star, Sparkles, Play } from 'lucide-react';

interface MovieItem {
  id: number;
  title: string;
  year: string;
  genre: string;
  rating: number;
  matchScore: number;
  tagline: string;
}

export const CineMatchPreview: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

  const movies: MovieItem[] = [
    {
      id: 1,
      title: 'Interstellar',
      year: '2014',
      genre: 'Sci-Fi',
      rating: 8.7,
      matchScore: 98,
      tagline: 'Mankind was born on Earth. It was never meant to die here.',
    },
    {
      id: 2,
      title: 'The Matrix',
      year: '1999',
      genre: 'Sci-Fi',
      rating: 8.7,
      matchScore: 96,
      tagline: 'Welcome to the Real World.',
    },
    {
      id: 3,
      title: 'Inception',
      year: '2010',
      genre: 'Thriller',
      rating: 8.8,
      matchScore: 95,
      tagline: 'Your mind is the scene of the crime.',
    },
    {
      id: 4,
      title: 'Ex Machina',
      year: '2014',
      genre: 'AI / Tech',
      rating: 7.7,
      matchScore: 94,
      tagline: 'There is nothing more human than the will to survive.',
    },
  ];

  const genres = ['All', 'Sci-Fi', 'AI / Tech', 'Thriller'];

  const filteredMovies =
    selectedGenre === 'All'
      ? movies
      : movies.filter((m) => m.genre === selectedGenre);

  return (
    <div className="preview-container cinematch-preview">
      {/* Search & Filter Bar */}
      <div className="preview-topbar">
        <div className="preview-badge-status">
          <Film size={13} className="cam-icon" />
          <span>TMDB INTEGRATION &bull; DISCOVERY FEED</span>
        </div>
        <div className="genre-filter-pills">
          {genres.map((g) => (
            <button
              key={g}
              className={`genre-pill ${selectedGenre === g ? 'active' : ''}`}
              onClick={() => setSelectedGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Cards Row */}
      <div className="cinematch-movie-grid">
        {filteredMovies.slice(0, 3).map((movie) => (
          <div key={movie.id} className="cinematch-card">
            <div className="cinematch-card-header">
              <span className="movie-genre-badge">{movie.genre}</span>
              <div className="movie-match-tag">
                <Sparkles size={11} />
                <span>{movie.matchScore}% Match</span>
              </div>
            </div>

            <div className="cinematch-poster-fake">
              <Film size={26} className="poster-icon" />
              <div className="poster-play-btn">
                <Play size={12} fill="currentColor" />
              </div>
            </div>

            <div className="cinematch-card-content">
              <h5 className="cinematch-movie-title">{movie.title}</h5>
              <div className="cinematch-meta-row">
                <span>{movie.year}</span>
                <div className="cinematch-rating">
                  <Star size={12} className="star-icon" fill="currentColor" />
                  <span>{movie.rating}</span>
                </div>
              </div>
              <p className="cinematch-tagline">&ldquo;{movie.tagline}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="preview-console-footer">
        <span>Recommendation Logic: Vector Similarity &bull; Response Time: <strong>42ms</strong></span>
        <span className="console-interactive-hint">Filter genres to test discovery engine</span>
      </div>
    </div>
  );
};
