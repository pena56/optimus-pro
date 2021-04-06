import '../styles/globals.css'
import CourseProvider from '@/context/course'
import PlanProvider from '@/context/plans'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/cart'
import Nav from '@/components/Nav'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <PlanProvider>
          <CourseProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CourseProvider>
        </PlanProvider>
      </CartProvider>
    </AuthProvider>
  )
}

// export async function getStaticProps(data) {
//   // Fetch the Data
//   const response = await fetch(`${API_URI}/course/`)
//   const courses = await response.json()

//   // Return the data as Props
//   return {
//     props: {
//       courses,
//     },
//   }
// }

export default MyApp
