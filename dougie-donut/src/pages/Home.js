import React from 'react'
import DisplayList from '../components/DisplayList'
import SearchBar from '../components/SearchBar'





function Home({getLocation,datalist}) {
  return (
    <div>
      <h1 className='header'>WHERE CAN WE CAUSE TROUBLE TODAY?</h1>
      <SearchBar getLocation={getLocation}/>
      <DisplayList  datalist={datalist}/>
    </div>
  )
}

export default Home
