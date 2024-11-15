const directors = [
  { name: "Christopher Nolan", movies: ["Inception", "Dunkirk"] },
  // Add more directors
];

const Directors = () => (
  <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => (
      <article key={index}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie, i) => <li key={i}>{movie}</li>)}
        </ul>
      </article>
    ))}
  </div>
);

export default Directors;
