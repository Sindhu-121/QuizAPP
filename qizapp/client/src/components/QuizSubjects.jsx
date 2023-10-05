import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EgQuizLandingPage.scss'
import { Link } from 'react-router-dom'

export const QuizSubjects = ({ course_id }) => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        if (course_id) {
            axios.get(`http://localhost:3308 /quiz_Subjects/${exam_id}`)
                .then((res) => {
                    setSubjects(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [course_id]);

    return (
        <ul>
            {subjects.map((subjects) => (
                <Link><p className='exams' key={subjects.subjects_id}>{subjects.subjects_name}</p></Link>
            ))}

        </ul>
    );
};