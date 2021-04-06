import React from 'react'
import CourseCard from '@/components/CourseCard'
import { CourseContext } from '@/context/course'
import Loading from '@/components/Loading'
import Section from './Section'
import Link from 'next/link'

const FeaturedCourses = () => {
  const {loading, featured, course } = React.useContext(CourseContext)
  if(loading) {
    return <Loading />
  }
  return (
    <div className='course__category'>
      <Section>
      <div className='section__title'>
          <h2>Learn Trading from Profesionals in the industry.</h2>
          <h4 className='sub__title'>
            Cryptocurrency, Forex, Stock & Commodities
          </h4>
        </div>

        <div className='row'>
          {featured.map((course) => {
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

        <div className='blog__btn'>
          <Link href='/courses'>
            <a>Discover more Courses</a>
          </Link>
        </div>
      </Section>
    </div>
  )
}

export default FeaturedCourses
