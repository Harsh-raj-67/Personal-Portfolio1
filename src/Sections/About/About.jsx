import React from 'react'
import Heading from '../../Components/Heading/Heading';
import './About.css';
import Prof1 from './Prof1.jpg';
const About = () => {
    return (
        <section id="about">
            <Heading index="01" heading="About Me"  />
            <div className="about_container">
                <div className="about_left">
                    <p className="about_desc">
                        Hello guys, i'm Harsh Raj, a frontend web-developer. Currently I am doing my Btech degree from Lovely Professional University.
                    </p>
                    <p className='about_desc'>I have rich experience in website design and building and custimization. Currently I'm working on 2,3 Projects that i have also mentioned below like Quiz app, E-commerce website.</p>
                </div>
                <div className="about_right">
<img src={Prof1} alt='profile_pic' className='about_profile_img' />
<div className="about_img_border" />

</div>
                </div>
           
        </section>
    )
}

export default About