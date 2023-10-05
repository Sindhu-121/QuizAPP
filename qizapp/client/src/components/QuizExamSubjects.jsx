import React from 'react'

const QuizExamSubjects = () => {
  return (
    <div>
          <div className='courses'>
              <p className='course-exams'>
                  {courses.map((course) => (
                      <p key={course.course_id}>
                          <div className='course-exam-btn-div'>
                              <button id='coures-exams-btn'
                                  onClick={() => handleCourseClick(course.course_id)}
                                  className={selectedCourse === course.course_id ? 'active' : ''}
                              >
                                  {course.course_name}<i class="fa-solid fa-caret-down"></i>
                              </button>
                          </div>
                          <div className='Course-Exam-sub-menu'>
                              <ul>
                                  {selectedCourse === course.course_id && (
                                      <EgQuizCouresandExam course_id={course.course_id} />
                                      // <EgQuizCouresandExam course_id={course.course_id} />
                                  )}
                              </ul>
                          </div>

                      </p>
                  ))}
              </p>
          </div>


    </div>
  )
}

export default QuizExamSubjects