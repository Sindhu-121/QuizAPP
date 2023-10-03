// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom'
// import { EgQuizCouresandExam } from './EgQuizCouresandExam';
// export const EgQuizLandingPage = () => {


//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3008/quiz_coures/')
//       .then((res) => {
//         setCourses(res.data);
//         console.log(res.data)
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);



//   return (

//     <div>
//       <div className='courses'>
      
//         <ul>
//           {courses.map((courses, index) => (
//         <li key={index}>
//               <EgQuizCouresandExam course_name={courses.course_name} course_id={courses.course_id} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
    
//   )
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EgQuizCouresandExam } from './EgQuizCouresandExam';

export const EgQuizLandingPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3008/quiz_coures/')
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCourseClick = (courseId) => {
    if (selectedCourse === courseId) {
      // If the same course is clicked again, close it by setting selectedCourse to null
      setSelectedCourse(null);
    } else {
      setSelectedCourse(courseId);
    }
  };

  return (
    <div>
      <div className='courses'>
        <ul>
          {courses.map((course) => (
            <li key={course.course_id}>
              <button
                onClick={() => handleCourseClick(course.course_id)}
                className={selectedCourse === course.course_id ? 'active' : ''}
              >
                {course.course_name}
              </button>
              {selectedCourse === course.course_id && (
                <EgQuizCouresandExam course_id={course.course_id} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


