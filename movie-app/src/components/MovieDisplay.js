export default function MovieDisplay({movieValue}) {
  const loaded = () => {
    return (
      <div>
        <h1>{movieValue.Title}</h1>
        <img src={movieValue.Poster} alt={movieValue.Title} />
        <h1>{movieValue.Genre}</h1>
        <h1>{movieValue.Year}</h1>
      </div>
    );
  };

  const loading = () => {
    return <h1>{movieValue.Error}</h1>
  };
  return movieValue.Title ? loaded() : loading();
}
