import { BottomNavigation } from '@mui/material'
import React from 'react'
import '../Navigation/Navigation.css'


function Navigation() {
    return (
    <div className='navigation'>
        <ul className='nav' role="tablist">
          <li className='nav-item'><a className='nav-link active' data-toggle="tab" href='#profile' role="tab" aria-controls="profile" aria-selected="true">Profile</a></li>
          <li className='nav-item'><a className="nav-link" data-toggle="tab" href='#education' role="tab" aria-controls="education" aria-selected="false">Education</a></li>
          <li className='nav-item'><a className="nav-link" data-toggle="tab" href='#experience' role="tab" aria-controls="experience" aria-selected="false">Experience</a></li>
          <li className='nav-item'><a className="nav-link" data-toggle="tab" href='#accomplishments' role="tab" aria-controls="accomplishments" aria-selected="false">Accomplishments</a></li>
          <li className='nav-item'><a className="nav-link" data-toggle="tab" href='#abilities' role="tab" aria-controls="abilities" aria-selected="false">Skills & Abilities</a></li>
        </ul>
    </div>
    )
}

export default Navigation
