import { BottomNavigation } from '@mui/material'
import React from 'react'
import '../Navigation/Navigation.css'


function Navigation() {
    return (
    <div id="carouselExampleIndicators" data-ride="carousel" className='navigation carousel slide'>
        <ul className='nav carousel-indicators' role="tablist">
          <li data-slide="0" data-target="#carouselExampleIndicators" className='nav-item'>
              <a className='nav-link active' data-toggle="tab" href='#profile' role="tab" aria-controls="profile" aria-selected="true">Profile
              </a>
          </li>
          <li data-slide="1" data-target="#carouselExampleIndicators" className='nav-item'>
              <a className="nav-link" data-toggle="tab" href='#education' role="tab" aria-controls="education" aria-selected="false">Education
              </a>
         </li>
          <li data-slide="2" data-target="#carouselExampleIndicators" className='nav-item'>
              <a className="nav-link" data-toggle="tab" href='#experience' role="tab" aria-controls="experience" aria-selected="false">Experience
              </a>
         </li>
          <li data-slide="3" data-target="#carouselExampleIndicators" className='nav-item'>
              <a className="nav-link" data-toggle="tab" href='#accomplishments' role="tab" aria-controls="accomplishments" aria-selected="false">Accomplishments
              </a>
         </li>
          <li data-slide="4" data-target="#carouselExampleIndicators" className='nav-item'>
              <a className="nav-link" data-toggle="tab" href='#abilities' role="tab" aria-controls="abilities" aria-selected="false">Skills & Abilities
              </a>
         </li>
        </ul>
        <div class="carousel-inner">
            <div className="carousel-item active">
                something 1
            </div>
            <div className="carousel-item">
                something 2
            </div>
            <div className="carousel-item">
                something 3
            </div>
            <div className="carousel-item">
                something 4
            </div>
            <div className="carousel-item">
                something 5
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    )
}

export default Navigation
