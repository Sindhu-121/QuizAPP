import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {EgQuizCouresandExam} from './EgQuizCouresandExam';
export const EgQuizLandingPage = () => {
    const[courses,setCourses] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3008/quiz_coures/')
        .then((res)=>{
          setCourses(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
      });
      },[]);
  return (
    <div>
<div className='courses'>
      <ul>
    {courses.map((courses, index) => (
          <li key={index}>
            <EgQuizCouresandExam course_name={courses.course_name} course_id={courses.course_id}/>
          </li>
      ))} 
       </ul>  
    </div>
    </div>
  )
}
