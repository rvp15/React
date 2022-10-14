import { useState } from "react";

export default function Form({getTheMovie}) {

  
  let [movieName, setMovieName] = useState('');

  const handleChange = (e) => {
    setMovieName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getTheMovie(movieName);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Movie App</h1>
        <input type="text" value={movieName} onChange={handleChange}></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
