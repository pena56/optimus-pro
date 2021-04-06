import axios from 'axios'
import { Router } from 'next/router'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

async function registerUser( email, password, fullname ) {
  const response = await fetch
    .post(`${API_URL}/auth/local/register/`, { email, password, fullname })
    .catch((error) => console.log(error))
  // setUser(data)
  // router.push('/')
  return response
}

// const registerUser = ( email, password, fullname ) => {
//   return new Promise((resolve, reject) => {
//     axios.post(`${API_URL}/auth/local/register`, {email, password, fullname}).then(res => {
//       resolve(res);
//       Router.push('/')
//     }).catch((error) => {
//       reject(error);
//     });
//   });
// };


export default registerUser
