// import Layout from '@/components/Layout'
import Section from '@/components/Section'
import React from 'react'
import { CourseContext } from '@/context/course'
import CourseList from '@/components/CourseList'

const coursesPage = () => {
  const response = React.useContext(CourseContext)

  console.log(response)

  return (
    <>
      <section className='course__hero'>
        <div className='container'>
          <h1 className='title'>Learn From the best</h1>
          <h4>Real World Expert traching Real world Skills</h4>
        </div>
      </section>

      <div className='coures__section'>
        <Section>
          <CourseList />
          {/* <div className='blog__btn'>
            <Link href='/courses'>
              <a>Discover more Courses</a>
            </Link>
          </div> */}
        </Section>
      </div>
    </>
  )
}

export default coursesPage
