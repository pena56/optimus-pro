import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import AuthContext from '@/context/AuthContext'

const login = () => {
  const { handleSubmit, register, errors } = useForm()
  const { user, loginUser, registerUser } = useContext(AuthContext)
  const [isMember, setIsMember] = useState(user)

  let Empty = false

  const toggleMember = () => {
    setIsMember(!isMember)
    // setIsMember((prevMember) => {
      
    // })
  }

  const onSubmit = (data) => {
    // e.preventDefault()

    registerUser(data)
    console.log(data)
   
  }

  return (
    <>
      <div className='page-100 login-section'>
        <div className='form-container login form'>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  ref={register({
                    required: { value: true, message: 'Fullname is required' },
                  })}
                />
                <span className='error'>{errors?.email?.message}</span>
              </div>
            )}
            <div className='form-contro'>
              <input
                type='email'
                placeholder='example@gmail.com'
                name='email'
                ref={register({
                  required: { value: true, message: 'Email is required' },
                })}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <span className='error'>{errors?.email?.message}</span>
            </div>
            <div className='form-contro'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                ref={register({
                  required: { value: true, message: 'Password is required' },
                })}
              />
              <span className='error'>{errors?.password?.message}</span>
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
