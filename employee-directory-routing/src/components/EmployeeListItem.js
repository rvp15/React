import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeListItem(props) {
  return (
    <div >
        
         <h3>{props.data.title}</h3>
         <Link to={`/${props.data.name}` }  >
     <h3 className='link'>{props.data.name}</h3>
     </Link>
    </div>
  )
}

export default EmployeeListItem
