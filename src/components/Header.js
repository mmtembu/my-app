import React from 'react'
import './Header.css'
import twitter from '../images/twitter.png' 

function Header({name, surname}) {
    return (
        <div className='header'>
            <div className='intro'>
                <p>Hello, I'm {name} {surname}</p>
                <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"/>
            </div>
            <div className='social-media-text'>
                <p>Let's connect</p>
            </div>
            <div className='social-media-platform'>
                <div className='linkedIn'>
                    <a href=' https://www.linkedin.com/in/mangaliso-mtembu-1933941ba'>
                        <img src="https://user-images.githubusercontent.com/28002518/112771684-4d50c880-902d-11eb-986f-5e2673239a3d.png"/>
                    </a>
                </div>
                <div className='twitter'>
                    <a href=' https://twitter.com/TokzicNinja'>
                        <img src={twitter}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
