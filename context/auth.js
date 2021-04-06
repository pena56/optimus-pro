import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { API_URL } from '@/lib/urls'
import Cookie from 'js-cookie'

const AuthContext = createContext()

export const AuthProvider = (props) => {
  const [user, setUser] = useState(false)
  const router = useRouter()

  /**
   * Add email to user
   * @param {String} email
   */
  const loginUser = async (identifier, password) => {
    // Prevent function from being run on the server
    if (typeof window === 'undefined') {
      return
    }

    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/auth/local`, { identifier, password })
        .then((res) => {
          // Set Cookie response from strapi to server validation
          Cookie.set('token', res.data.jwt)

          //resolve the promise to set loading to false to Signup form
          resolve(res)
          //redirect back to home page for course selection
          router.push('/')
        })
        .catch((error) => {
          // reject the promise and pass the error object back to the form
          reject(error)
        })
    })

    // setUser({ username, email, password })
    // router.push('/')
  }

  const registerUser = async (username, email, password) => {
    // Prevent function from being run on the server
    if (typeof window === 'undefined') {
      return
    }
    // setUser({ username, email, password })
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/auth/local/register`, { username, email, password })
        .then((res) => {
          // Set Cookie response from strapi for server validation
          Cookie.set('token', res.data.jwt)

          //resolve the promise to set loading to false in SignUp form
          resolve(res)
          //redirect back to home page for Course selection
          router.push('/')
        })
        .catch((error) => {
          //reject the promise and pass the error object back to the form
          reject(error)
        })
    })
  }

  /**
   * Log the user out (set the user to null)
   */
  const logoutUser = async () => {
    // setUser(null)
    //remove token and user cookie
    Cookie.remove('token')
    delete window.__user
    // sync logout between multiple windows
    window.localStorage.setItem('logout', Date.now())
    //redirect to the home page
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
