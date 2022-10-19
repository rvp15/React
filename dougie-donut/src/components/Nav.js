import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
     <Link to='/'><div>Home</div></Link>
     {/* <Link to='/borough/${}'><div>Borough</div></Link> */}
    </div>
  )
}

export default Nav
