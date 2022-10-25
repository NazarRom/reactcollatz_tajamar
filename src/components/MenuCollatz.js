import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MenuCollatz extends Component {
  render() {
    return (
      <div>
         <nav className='btn-group' style={{listStyle:"none"}}>
            <li>
                <NavLink className="btn btn-primary" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="btn btn-primary" to="/collatz/245">Collatz 245</NavLink>
            </li>
            <li>
                <NavLink className="btn btn-primary" to="/collatz/3476">Collatz 3476</NavLink>
            </li>
            <li>
                <NavLink className="btn btn-primary" to="/collatz/6784">Collatz 6784</NavLink>
            </li>
         </nav>
      </div>
    )
  }
}
