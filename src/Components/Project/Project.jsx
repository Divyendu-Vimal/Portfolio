import React from 'react'
import Contact from '/Images/contactms.png'
import Blog from '/Images/blogms.png'
import Book from '/Images/bookms.png'
import './Project.css'
const Project = () => {
  return (
    <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>Projects</h2>

        <div className='container project_container'>
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Contact} alt="" />
                </div>
                <h3>Contact MS</h3>
                <small className='text-light'>MERN Stack</small>
                <div className='project_item_btn'>
                    <a href="" className='btn'>GitHub</a>
                </div>
            </article>

            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Blog} alt="" />
                </div>
                <h3>Blog MS</h3>
                <small className='text-light'>MERN Stack</small>
                <div className='project_item_btn'>
                    <a href="" className='btn'>GitHub</a>
                </div>
            </article>

            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Book} alt="" />
                </div>
                <h3>Book MS</h3>
                <small className='text-light'>MERN Stack</small>
                <div className='project_item_btn'>
                    <a href="" className='btn'>GitHub</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Project