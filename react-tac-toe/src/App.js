//Top Level Component
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";


//Functional components are used instead of class
//Inside the App component define all the components which need to be used.
function App() {
  return (
    <div >

      <Header/>
      
      <div className="container">
      <Player whichPlayer='X'/>
      <Player  whichPlayer='O'/>
      </div>
      
      <Board/>
  

    </div>
  );
}

export default App;
