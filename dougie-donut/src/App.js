
import './App.css';
import {Route, Routes} from "react-router-dom"
import Nav from './components/Nav';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Details from './pages/Details';




function App() {
  let [datalist,setDataList] =useState([])


const getLocation = async (locationName,number) =>{
  try{
    const response = await fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${locationName}&$limit=${number}`)
    const data = await response.json();
    console.log(data);
    setDataList(data)
  }catch(err){
    console.log(err);
  }
}
useEffect(()=>{
  getLocation('QUEENS',5)
  console.log('testing')
},[])

  return (
    <div className="App">
     <Nav/>
     <Routes>
      <Route path='/' element={<Home getLocation={getLocation} datalist={datalist}/> }></Route>
      <Route path='/details/:id' element={<Details datalist={datalist}/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
