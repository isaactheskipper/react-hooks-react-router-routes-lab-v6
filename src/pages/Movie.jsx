import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const movie = { id: 1, title: "Inception", time: "148 minutes", genres: ["Action", "Sci-Fi"] }; // Mock data

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => <span key={index}>{genre}</span>)}
    </div>
  );
};

export default Movie;
