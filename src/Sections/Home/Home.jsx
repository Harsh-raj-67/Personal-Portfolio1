import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <section id="home" className='home_section'>
            <p className='home_greet'>
                Hi, my name is 
            </p>
            <h1 className="home_heading_1">
                Harsh Raj
            </h1>
            <h1 className="home_heading_2">
                I build things for the web.
            </h1>
            <p className="home_desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui rerum quibusdam commodi esse, tenetur dicta fuga sapiente ad, reiciendis possimus corporis. Esse modi itaque iusto id explicabo saepe! Vero ea numquam doloremque itaque, aperiam eveniet sequi odio rerum eum voluptates repellat, cum distinctio aliquam ipsam.
            </p>
            <a href='#work'>
               <button className='home_btn'>Check out my work!</button> 
            </a>

        </section>
    )
}
export default Home;