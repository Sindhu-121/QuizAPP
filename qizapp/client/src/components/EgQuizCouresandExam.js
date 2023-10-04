// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import axios from 'axios';

// export const EgQuizCouresandExam = ({ course_id, course_name }) => {
//     const [exams, setExams] = useState([]);
//     // displaycourse function
//     const displaycourses = (e) => {
//         console.log(e.target.value)
//         axios.get(`http://localhost:3008/quiz_exams/` + e.target.value)
//             .then((res) => {
//                 setExams(res.data);
//                 console.log(res.data)
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }
//     return (
//         <div>
//             <ul>
//                 <li key={course_id}>
//                     <button value={course_id} onClick={displaycourses}>{course_name}</button>
//                         {exams.map((exams) => (<li key={exams.exam_id}>
//                             {exams.exam_name}
//                         </li>
//                         ))}
//                 </li>
//             </ul>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EgQuizLandingPage.scss'

export const EgQuizCouresandExam = ({ course_id }) => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        if (course_id) {
            axios.get(`http://localhost:3308/quiz_exams/${course_id}`)
                .then((res) => {
                    setExams(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [course_id]);

    return (
        <ul>
            {exams.map((exam) => (
                <p className='exams' key={exam.exam_id}>{exam.exam_name}</p>
            ))}
        </ul>
    );
};
