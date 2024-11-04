import { BottomNavigation } from '@mui/material'
import { compose } from '@mui/system';
import {React, useState, useEffect} from 'react'
import { act } from 'react-dom/test-utils';
import '../Navigation/Navigation.css'
import Profile from '../pages/Profile'
import $ from 'jquery'
import Education from '../pages/Education/Education';

function Navigation() {
    
    const [active, setActive] = useState([1, 0, 0, 0, 0]);
    const [index, setIndex] = useState(0);
    const [scrollIndex, setScrollIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState(0)


    useEffect(() =>{

    })
    

    // useEffect(() =>{
        
    // const attrObserver = new MutationObserver((mutations)=>{
    //     mutations.forEach(mu =>{
    //         if(mu.type !== "attributes " && mu.attributeName !== "class") return;
    //         console.log("yep the class was modified!!!");
    //     });
    // });
    
    // const ELS_test = document.querySelector("#carouselExampleIndicators");
    // console.log(ELS_test)
    // // ELS_test.forEach(el => attrObserver.observe(el, {attributes: true}));
    //     return () =>{
    //         // document.body.removeChild(script);
    //     }
    // }, []);

    
    return (
    <div id="carouselExampleIndicators" data-ride="carousel" className='navigation carousel slide' data-interval="false">
        <ul className='nav carousel-indicators' role="tablist">
          <li
          onClick={(e)=>{
            // e.target.offsetParent.className="nav-item active"
            console.log($("#profile_list"))
            $("#profile_anchor").toggleClass("active")
            $("#profile_list").toggleClass("active")
            console.log(e.target.offsetParent.attributes["data-slide"])
            // active[0] = 1
            // e.target.offsetParent.className.includes()
            console.log(`show me the first index: ${e.target.offsetParent.className}`)
          }} data-slide="0" data-target="#carouselExampleIndicators" className='nav-item' id="profile_list">
              <a className='nav-link active' data-toggle="tab" href='#profile' role="tab" aria-controls="profile" aria-selected="true" id="profile_anchor">Profile
              </a>
          </li>
          <li onClick={(e)=>{
                // $("#education_anchor").toggleClass("active")
                // $("#education_list").toggleClass("active")
                  e.target.offsetParent.className="nav-item active"
                //   console.log(e.target.offsetParent.className)
                console.log(`show me the second index: ${e.target.offsetParent.className}`)
                //   console.log(e.target.className)
              }} data-slide="1" data-target="#carouselExampleIndicators" className='nav-item' id="education_list">
              <a className="nav-link" data-toggle="tab" href='#education' role="tab" aria-controls="education" aria-selected="false" id="education_anchor">Education
              </a>
         </li>
          <li onClick={(e)=>{
            // $("#experience_anchor").toggleClass("active")
            // $("#experience_list").toggleClass("active")
              console.log(`show me the third index: ${e.target.offsetParent.className}`)
          }}
          data-slide="2" data-target="#carouselExampleIndicators" className='nav-item' id="experience_list">
              <a className="nav-link" data-toggle="tab" href='#experience' role="tab" aria-controls="experience" aria-selected="false" id="experience_anchor">Experience
              </a>
         </li>
          <li onClick={(e)=>{
            // $("#accomplish_anchor").toggleClass("active")
            // $("#accomplish_list").toggleClass("active")
              console.log(`show me the fourth index: ${e.target.offsetParent.className}`)
          }} 
          data-slide="3" data-target="#carouselExampleIndicators" className='nav-item' id="accomplish_list">
              <a className="nav-link" data-toggle="tab" href='#accomplishments' role="tab" aria-controls="accomplishments" aria-selected="false" id="accomplish_anchor">Accomplishments
              </a>
         </li>
          <li onClick={(e)=>{
            // $("#abilities_anchor").toggleClass("active")
            // $("#abilities_list").toggleClass("active")
              console.log(`show me the fitth index: ${e.target.offsetParent.className}`)
          }}
           data-slide="4" data-target="#carouselExampleIndicators" className='nav-item' id="abilities_list">
              <a className="nav-link" data-toggle="tab" href='#abilities' role="tab" aria-controls="abilities" aria-selected="false" id="abilities_anchor">Skills & Abilities
              </a>
         </li>
        </ul>
        <div className="carousel-inner">
            <section className="carousel-item active">
            <Profile/>
            </section>
            <section className="carousel-item">
            <Education/>
            </section>
            <section className="carousel-item">
            something 3
            </section>
            <section className="carousel-item">
            something 4
            </section>
            <section className="carousel-item">
            something 5
            </section>
        </div>
        <a onClick={()=>{
            setPreviousIndex(scrollIndex);
            let value = scrollIndex;
            value--;
            console.log(`is this true? ${value < 0 ? 4 : value}`)
            setScrollIndex(value < 0 ? 4 : value)
            active[previousIndex] = 0;
            active[scrollIndex] = 1;

            // const ELS_test = document.querySelector("#carouselExampleIndicators");
            // console.log(ELS_test)
            // // ELS_test.forEach(el => attrObserver.observe(el, {attributes: true}));
            
            // console.log(ELS_test)
            // ELS_test.forEach(el => el.classList.toggle())
            // console.log(`show me what is happening here for previous: ${previousIndex}`)
            // console.log(`show me what is happening here for current: ${scrollIndex}`)
        }}
        className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a onClick={()=>{
            setPreviousIndex(scrollIndex);
            let value = scrollIndex;
            value++;
            setScrollIndex(value > 4 ? 0 : value)
            active[previousIndex] = 1;
            active[scrollIndex] = 0;
            // console.log(`show me what is happening here for previous: ${previousIndex}`)
            // console.log(`show me what is happening here for current: ${scrollIndex}`)
        }}
        className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        {
            console.log(`show me what is happening here for previous: ${previousIndex}`) ||
            console.log(`show me the index please: ${scrollIndex}`)

        }
    </div>
    )
}

export default Navigation
