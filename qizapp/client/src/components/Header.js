import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"
import { EgQuizLandingPage } from './EgQuizLandingPage';


// import { EgQuizLandingPage } from './EgQuizLandingPage';
import logo from '../Images/logo.jpeg'
import '../styles/Header.scss'

const Header = () => {

    const [courses, setCourses] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3308/quiz_coures/')
            .then((res) => {
                setCourses(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const toggleList = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='navbar-div1'>
            <div className='navbar-div2'>
                <img src={logo} alt="logo" width='240px' height='70px' />


                <div className='navbar-links'>
                    <Link className='nav-links' to={"/"}><p>Home</p></Link>
                    <div>
                        <button className='nav-coures-btn' onClick={toggleList}>
                            Courses<i class="fa-solid fa-caret-down"></i>
                        </button>
                        {isOpen && (
                            <ul>
                                {courses.map((courses) => (
                                    <HashLink className='nav-links' to="/#egQuizLandingPage" elementId={<EgQuizLandingPage />}>  <li className='nav-courses-li'>{courses.course_name}</li></HashLink>

                                ))}
                            </ul>
                        )}
                    </div>
                    <Link className='nav-links'>Ask Doubts</Link>
                </div>


            </div>
        </div>
    );
};


export default Header
