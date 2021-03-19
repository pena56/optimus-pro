import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaTelegram, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
  }
  return (
    <footer className='footer'>
      <div className='section-center'>
        <div className='row'>
          <div className='news-letter col-md-6 mx-auto'>
            <h4 className='sub-title'>
              Join our mailing list to receive news and announcements.
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  ref={register({ required: { value: true } })}
                />
                <button type='submit'>Subscribe</button>
              </div>
            </form>
            <div className='small-footer'>
            <p>Copyright &copy; 2020 OptimusPro. All Rights Reserved</p>
              <a
                href='https://olivegeeks.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Powered by Olivegeeks{' '}
                {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
              </a>
            </div>
          </div>
          <div className='social-links col-md-4 mx-auto'>
            <h2 className='logo'>
              Optimus<span>Pro</span>{' '}
            </h2>
            <div className='footer-content'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                modi, quas autem commodi debitis nesciunt non aliquam odit optio
                dolorem?
              </p>
              <h4 className='sub-title'>Connect</h4>
              <p>optimuspro@mail.com</p>
              <div className='icons'>
                <Link href='/'>
                  <a className='footer-icon'>
                    <FiFacebook />
                  </a>
                </Link>
                <Link href='/'>
                  <a className='footer-icon'>
                    <FiInstagram />
                  </a>
                </Link>
                <Link href='/'>
                  <a className='footer-icon'>
                    <FaTelegramPlane />
                  </a>
                </Link>
                <Link href='/'>
                  <a className='footer-icon'>
                    <FiLinkedin />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
