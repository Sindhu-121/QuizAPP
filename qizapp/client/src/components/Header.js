import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"
import { EgQuizLandingPage } from './EgQuizLandingPage';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// import { EgQuizLandingPage } from './EgQuizLandingPage';
import logo from '../Images/logo.jpeg'
import '../styles/Header.scss'

import first from '../Images/first.png'
import second from '../Images/second.png'
import third from '../Images/third.png'
import fourth from '../Images/fourth.png'


const Header = () => {

    const [courses, setCourses] = useState([]);
    // const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3308/quiz_coures/')
            .then((res) => {
                setCourses(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // const toggleList = () => {
    //     setIsOpen(!isOpen);
    // }


    return (
        <div className='navbar-div1'>
            <div className='navbar-div2'>
                <img src={logo} alt="logo" width='240px' height='70px' />


                <div className='navbar-links'>
                    <Link className='nav-links' to={"/"}><p>Home</p></Link>
                    <div>

                        <div className="drop_menu">
                            <a href="/">courses</a>
                            <div className="sub_drop_menu">
                                    <ul>
                                        {courses.map((courses) => (
                                            <HashLink className='nav-links' to="/#egQuizLandingPage" elementId={<EgQuizLandingPage />}>  <li className='nav-courses-li'>{courses.course_name}</li></HashLink>

                                        ))}
                                    </ul>
                            </div>
                        </div>
              
                    </div>
                    <Link className='nav-links'>Ask Doubts</Link>

                  
                </div>


            </div>
            <div className='header-div'>
                <div className='header-content'> 
                    <h1 className='header-div-heading'>Best Online Courses <br /> </h1><span className='header-div-span'>UG,PG,MBA,CA</span>
                    <p className='header-div-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='header-slider'>
                    <Carousel interval={1700} autoPlay infiniteLoop
                    showIndicators ={false}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}

                    >
                        <div>
                            <img src={first} alt='img' />
                        </div>
                        <div>
                            <img src={second} alt='img' />
                        </div>
                        <div>
                            <img src={third} alt='img' />
                        </div>
                        <div>
                            <img src={fourth} alt='img' />
                        </div>
                    </Carousel>
                </div>
               
            </div>
        </div>
    );
};


export default Header
