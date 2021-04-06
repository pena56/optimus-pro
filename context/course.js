import { createContext, useState, useEffect } from 'react'
import course from '../course.json'
import { API_URL } from '@/lib/urls'
import { featuredCourse } from '@/lib/helpers'
import axios from 'axios'

export const CourseContext = createContext()

export default function CourseProvider({children}){

  const [loading, setLoading] = useState(false)
  const [featured, setFeatured] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(`${API_URL}/courses/`).then(response => {
      const featured = featuredCourse(response.data)
      setCourses(response.data)
      setFeatured(featured)
      setLoading(false)
    })
    return () => {};
  }, []);


  return (
    <CourseContext.Provider value={{loading, featured, courses}}>
      {children}
    </CourseContext.Provider>
  )
}




// export async function getStaticProps() {
//   // Fetch the Data
//   const response = await fetch(`${API_URI}/course/`)
//   const courses = await response.json()

//   // Return the data as Props
//   return {
//     props: {
//       courses
//     }
//   }
// }

