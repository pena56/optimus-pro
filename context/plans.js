import { useState, createContext, useEffect } from 'react'
import { API_URL } from '@/lib/urls'
import axios from 'axios'
// import planData from '../plans.json'

export const PlanContext = createContext()

export default function PlanProvider({children}){
  const [loading, setLoading] = useState(false)
  const [plans, setPlan] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(`${API_URL}/plans/`).then(response => {
      setPlan(response.data)
      setLoading(false)
    })
    return () => {};
  }, []);


  return (
    <PlanContext.Provider value={{loading, plans}}>
      {children}
    </PlanContext.Provider>
  )
}

// export async function getStaticProps(){
//   // fetch the data
//   const plans_res = await fetch(`${API_URI}/plans/`)
//   const plans = await plans_res.json()
//   console.log(plans)

//   // return the plans as props
//   return {
//     props: {
//       plans
//     }
//   }
// }

