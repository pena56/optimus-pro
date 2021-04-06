import React from 'react'
import CourseCard from './CourseCard'
import Link from 'next/link'
import { CourseContext } from '@/context/course'
import Section from './Section'

const CourseList = () => {
  const response = React.useContext(CourseContext)
  const { courses } = response

  return (
    <>
      <div className='section__title'>
        <h4>Learn Trading from Profesionals in the industry.</h4>
        <h5 className='sub__title'>
          Cryptocurrency, Forex, Stock & Commodities
        </h5>
      </div>

      <div className='row'>
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              title={course.title}
              // amount={course.price}
              // content={course.content}
              meta_description={course.meta_description}
              slug={course.slug}
            />
          )
        })}
      </div>
    </>
  )
}

export default CourseList
