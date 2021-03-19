import React from 'react'
import Layout from '@/components/Layout'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const login = () => {
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
  }

  return (
    <Layout>
      <div className='page-100 login-section'>
        <div className='form-container'>
          <h4>Login</h4>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='form-control'>
              <input
                type='email'
                placeholder='example@gmail.com'
                name='email'
                ref={register({ required: { value: true, message: 'Email is required' } })}
              />
              <span className="error">{errors ?.email?.message}</span>
            </div>
            <div className='form-control'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                ref={register({ required: { value: true, message: 'Password is required' } })}
              />
              <span className="error">{errors?.password ?.message}</span>
            </div>
            <button type="submit" className="btn-login">Login</button>
            <div>
              Need to register?
              <Link href='/register'>
                <a> Click here</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default login