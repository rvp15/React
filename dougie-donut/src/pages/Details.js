import React from 'react'
import { useParams } from "react-router-dom"; 

function Details({datalist}) {
  const params = useParams()
// console.log(params)
// console.log(datalist)
let filteredData = datalist.filter((item)=>item.unique_key === params.id)
console.log(filteredData)
  return (
    <div className='detailspage'>
      <h1>Complaint Detail page</h1>
      <h2>Agency:{filteredData[0].agency_name}</h2>
      <h2>Status: {filteredData[0].status}</h2>
      <h2>Description: {filteredData[0].descriptor}</h2>
    </div>

  )
}

export default Details
