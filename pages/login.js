import React, { useState, useContext } from 'react'
// import Layout from '@/components/Layout'
// import { useForm } from 'react-hook-form'
// import loginUser from '@/lib/loginUser'
// import registerUser from '@/lib/registerUser'
import AuthContext from '@/context/AuthContext'

const login = () => {
  // const { handleSubmit, register, errors } = useForm()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, loginUser, registerUser } = useContext(AuthContext)
  const [isMember, setIsMember] = useState(user)

  let Empty = false

  const toggleMember = () => {
    setIsMember((prevMember) => {
      console.log(prevMember)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isMember) {
      // response = await loginUser
    } else {
      registerUser(username, email, password)
    }
    // if (response) {
    //   console.log('Success')
    //   console.log(response)
    //   // Show alert and navigate from the page
    // } else {
    //   // Show alert
    // }
  }

  return (
    <>
      <div className='page-100 login-section'>
        <div className='form-container login form'>
          <form onSubmit={handleSubmit}>
            {isMember ? (
              <h4 className='form__title'>Login</h4>
            ) : (
              <h4 className='form__title'>Register</h4>
            )}
            {!isMember && (
              <div className='form-contro'>
                <input
                  type='text'
                  placeholder='Fullname'
                  name='fullname'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // ref={register({
                  //   required: { value: true, message: 'Fullname is required' },
                  // })}
                />
                {/* <span className='error'>{errors?.email?.message}</span> */}
              </div>
            )}
            <div className='form-contro'>
              <input
                type='email'
                placeholder='example@gmail.com'
                name='email'
                // ref={register({
                //   required: { value: true, message: 'Email is required' },
                // })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <span className='error'>{errors?.email?.message}</span> */}
            </div>
            <div className='form-contro'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // ref={register({
                //   required: { value: true, message: 'Password is required' },
                // })}
              />
              {/* <span className='error'>{errors?.password?.message}</span> */}
            </div>
            {isMember ? (
              <button type='submit' className='btn-login'>
                Login
              </button>
            ) : (
              <button type='submit' className='btn-login'>
                Sign up
              </button>
            )}
          </form>

          <div>
            {isMember ? 'Not yet a member ?' : 'Already a member'}
            <span className='reg__link' onClick={toggleMember}>
              Click here
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default login
