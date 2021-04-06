import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
// import { API_URL } from '@/lib/urls'


const AuthContext = createContext()

export const AuthProvider = (props) => {
  const [user, setUser] = useState(false)
  const router = useRouter()

  /**
   * Add email to user
   * @param {String} email
   */
  const loginUser = async (username, email, password) => {
    setUser({ username, email, password })
    router.push('/')
  }

  const registerUser = async (username, email, password) => {
    setUser({ username, email, password })
  }

  /**
   * Log the user out (set the user to null)
   */
  const logoutUser = async () => {
    setUser(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
