import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const apiKey = "98e3fb1f";
  let [movie, setMovie] = useState({});
  //async / await
  const getMovie = async (movieName) => {
    // fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=godfather`)
    // .then((res)=>res.json())
    //.then((data)=>console.log(data))
    // .catch(e=>console.log(e))

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    } catch (e) {
      console.log('error while fetching data from API')
      console.log(e);
    }
  };
  //2 arugument-1.callback fun, 2.dependency(empty array)
  // useEffect(() => {
  //   getMovie("clueless");
  //   console.log("testing");
  // }, []);
  let moviearray = ['vikram', 'godfather','vedha','fast and furious']
  let randomnum = Math.floor(Math.random() * (moviearray.length))
 
  useEffect(() => {
    getMovie(moviearray[randomnum])
    console.log("movie data has changed");
  }, []);

  return (
    <div className="App">
      <Form getTheMovie={getMovie} />
      <MovieDisplay movieValue={movie} />
    </div>
  );
}

export default App;
