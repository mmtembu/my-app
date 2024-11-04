import React from 'react'
import './Education.css'

function Education() {
    return (
        <div className='education'>
            <div className='high_school'>
                <div className='name'>
                    <h5>Kaalfontein Secondary School, Ebony Park</h5>
                    <div className='year'>
                        <h5>2010  -  2014</h5> 
                    </div>
                </div>
                <div className='info'>
                    <p>Accounting (E), Business Studies (C), Economics(C), English FAL(C), IsiZulu Home
                        Language(C), Life Orientation(B), Mathematics (C)</p>
                </div>
            </div>
            <div className='uni_school'>
                <div className='name'>
                    <h5>University of Pretoria</h5>
                    <div className='year'>
                        <h5>2015  -  2020</h5>
                    </div>
                </div>
                <div className='info'>
                    <p>BSc I.T - Information and Knowledge Systems (Incomplete) 
                        Modules Included: Core modules - Program Design, Information Science, Software 
                        Modelling, Introduction to Computer Science; Elective modules - Informatics (Databases)
                    </p>
                </div>
            </div>
            <div className='institution_school'>
                <div className='name'>
                    <h5>WeThinkCode_</h5>
                    <div className='year'>
                        <h5>2020  -  2022</h5>
                    </div>
                </div>
                <div className='info'>
                    <p>An Institution that teaches people how to write code and gets them placed at one of their corporate sponsors.
                        (Python, Java, Flutter, HTML, CSS, JAVASCRIPT, SQLITE, POSTGRE & RESTFUL APIs)
                    </p>
                </div>
            </div>
            <div className='short_school'>
                <div className='name'>
                    <h5>Udacity</h5>
                    <div className='year'>
                        <h5>2018  -  2018</h5>
                    </div>
                </div>
                <div className='info'>
                    <p>Google Africa Scholarship Android Basics Course (JAVA ANDROID)</p>
                </div>
            </div>
        </div>
    )
}

export default Education