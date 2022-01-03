import {React, useState} from 'react'
import './Profile.css'
import my_image from '../../../src/assets/images/image.jfif'

const Profile =()=> {
    return (
        <div className='profile-data'>
            <div className='profile'>
                <div className='about'>
                    <p >About me</p>
                    <div className='about-data'> 
                        <div className='description'>
                            <p>
                                Software Engineering student at WeThinkCode_ 👨🏿‍🎓<br/>
                                I enjoy coding 🧑‍💻, playing video games 🎮, <br/>
                                watching interesting series 📺.<br/>
                                I'm into Star Wars<br/>
                                Also like helping people ℹ️.<br/>
                                My persistance is of Ahsoka Tano. I usually <br/> don't give up that easily 😤.<br/>
                                I live by trial and error, until I find the <br/>solution to the problem 😎.<br/>
                                {/* 🔭 I’m currently working on a Personal Project <br/> Management Tool.<br/> */}
                                {/* 🌱 I’m currently learning React.<br/> */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='display-picture'>
                    <img src={my_image}/>
                </div>
                <div className='about'>
                    <p >Details</p>
                    <div className='about-data'> 
                        <div className='description'>
                            <p>
                                Name: Mangaliso Elvynn Mtembu<br/>
                                Age: {
                                    `${getAge("05/18/1996")}`
                                }<br/>
                                Favorite Programming language: C++<br/>
                                Favorite Activity: Learning<br/>
                                Gamer Alias: TokzicNinja<br/>
                                Jedi Class: Padawan.<br/>
                                Favorite Color(s): Red and Black.<br/>
                                Music Genre: Everything except gospel<br/>
                                Marvel character(s): Spider-Man & Captain America.<br/>
                                DC character: Batman.<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats'>
                <a href="https://github.com/mmtembu/github-readme-stats">
                    <img align="center" src="https://github-readme-stats.vercel.app/api?username=mmtembu&show_icons=true&include_all_commits=true&theme=dark&count_private=true" alt="Mangaliso's github stats" />
                    </a>
                    <br/>
                    <br/>
                    <a href="https://github.com/anuraghazra/github-readme-stats">
                    <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mmtembu&layout=compact&theme=dark&show_icons=true" />
                </a>
            </div>
        </div> 
    )
}

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

export default Profile
