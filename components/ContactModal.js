import React, { useState } from 'react'
import Section from './Section'
import styles from '@/styles/Contact.module.css'
import { FaEnvelope, FaTimes } from 'react-icons/fa'

const ContactModal = ({ isClose, toggleContact }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={`modalBody ${isClose ? 'show-modal' : ''}`}>
      <button className={styles.close_btn} onClick={toggleContact}>
        <FaTimes />
      </button>
      <section className={styles.modal_section}>
        <div className={styles.contactContainer}>
          <div className={styles.formCard}>
            <div className={styles.titleHeader}>
              <div className={styles.icon}>
                <FaEnvelope />
              </div>
              <div>
                <h2>Get in Touch</h2>
                <p>Leave your message and we'll get back to you shortly.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles.formInput}>
                    <label htmlFor='name'>Name*</label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      name='name'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className={styles.formInput}>
                    <label htmlFor='email'>Email*</label>
                    <input
                      type='email'
                      placeholder='example@gmail.com'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formInput}>
                <label htmlFor='message'>Message*</label>
                <textarea
                  name='message'
                  value={message}
                  id='message'
                  onChange={(e) => setMessage(e.target.value)}
                  className={styles.textarea}
                  placeholder="Tell us were we can help you"
                ></textarea>
              </div>
              <button className={styles.btn}>Send Message</button>
            </form>
          </div>
          <div className={styles.imgContainer}>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactModal
