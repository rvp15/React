import React from 'react'
import { useParams } from "react-router-dom";

function EmployeePage() {

//   const params = useParams();
// const name = params.name
  return (
    <div>
      <h1 >Employee</h1>
      <div className='emp-page'>
      <h1>{useParams().name}</h1>
      </div>
      <div className='emp-page'>
        <h3>Call Office</h3>
        567-556-8907
      </div>
      <div className='emp-page'>
        <h3>Call Mobile</h3>
        567-556-8907
      </div>
      <div className='emp-page'>
        <h3>SMS</h3>
        567-556-8907
      </div>
      <div className='emp-page'>
        <h3>Email</h3>
        juli34567@gmail.com
      </div>
    </div>
  )
}

export default EmployeePage
