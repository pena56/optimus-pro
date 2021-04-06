import Layout from '@/components/Layout'
import { useContext } from 'react'
import Section from '@/components/Section'
import styles from '@/styles/VideoCard.module.css'
import { FaPlay } from 'react-icons/fa'
import React from 'react'
import AuthContext from '@/context/AuthContext'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'
import VideoPlayer from '@/components/VideoPlayer'

// const course = course[0]

const CourseDetails = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      {/* <h1>Hello Course Details</h1> */}
      <section className='course__details'>
        <Section>
          <h1 className='courseTitle'>Next.js Firebase - The Full Course</h1>
          <div className='video__player'>
            <VideoPlayer />
          </div>
          <div className='meta_description'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              quaerat assumenda esse, ipsam quo ratione rem architecto libero
              saepe fuga. Quo optio, ut temporibus, deleniti cupiditate
              dignissimos.
            </p>
            <div className='whatToLearn'>
              <h3 className='learn_title'>What you will learn</h3>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                recusandae ut fugiat harum incidunt earum quidem itaque ducimus
                quo distinctio facilis fuga, debitis, sapiente ipsam velit
                consequatur. Expedita quis illum sint, praesentium minima ullam
                quae similique voluptate nesciunt culpa. Architecto vero dolorum
                voluptatem temporibus maiores quaerat tempore voluptate sint
                quas.
              </p>

              <ul>
                <li>Custom Firebase usernames</li>
                <li>Custom Firebase usernames</li>
                <li>Custom Firebase usernames</li>
                <li>Custom Firebase usernames</li>
                <li>Custom Firebase usernames</li>
                <li>Custom Firebase usernames</li>
                <li>Custom Firebase usernames</li>
                <li>Custom Firebase usernames</li>
              </ul>

              <h3 className="learn_title">🤔 Is this Course Right for Me?</h3>
              <p>This course is intermediate level and designed to help you become a productive full-stack Flutter app developer. It assumes you have some basic knowledge of programming, ideally in a language similar to JavaScript, C#, or Java. It is fast-paced and similar to my style on YouTube, but far more in-depth and comprehensive.</p>
            </div>
          <button className="enroll_btn">Enroll for $199.99</button>
          </div>
        </Section>
      </section>

      <div className='details__section'>
        {/* <Section>
          <div className='row'>
            <div className='col-md-5 mx-auto'>
              <div className={styles.videoContainer}>
                <video className={styles.videoTag} width='320' height='240'>
                  <source src='/next.js-crash-course.mp4' type='video/mp4' />
                  <source src='movie.ogg' type='video/ogg' />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.videoNote}>
                  <button type='button' className={styles.playBtn}>
                    <FaPlay />
                  </button>
                  <h5>Play to Learn More...</h5>
                </div>

                <div className={styles.videoPlayerModal}>
                  <div className={styles.videoPlayer}>
                    <video className={styles.videoTag} width='320' height='240' controls autoplay>
                      <source src='/next.js-crash-course.mp4' type='video/mp4' />
                      <source src='movie.ogg' type='video/ogg' />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <div className='description__section'>
              <h4 className='des__title'>What you'll learn</h4>
                <ul>
                  <li>Understand the intuition behind Artificial Neural Networks</li>
                  <li>Understand the intuition behind Artificial Neural Networks</li>
                  <li>Understand the intuition behind Artificial Neural Networks</li>
                  <li>Understand the intuition behind Artificial Neural Networks</li>
                </ul>
            </div>
            </div>
            <div className='col-md-7 mx-auto'>
              <div className='cartDetails'>
                <h3 className='single_title'>Intriduction on forex</h3>
                <p className='meta_des'>
                  <b>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati laboriosam beatae voluptatibus, magnam molestiae
                    voluptatum! Beatae harum consequuntur consequatur mollitia.
                  </b>
                </p>
                <div className='row'>
                  <div className='col-md-10'>
                    <h4 className='single_price'> $388</h4>
                    <div className='single_btns'>
                      <button className='action__btn'> <MdShoppingCart /> Add to cart</button>
                      <button className='action__btn btn'>Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='description__section'>
              <h4 className='des__title'>Descriptions</h4>
                <ul>
                  <li>Understand the intuition behind Artificial Neural Networks</li>
                  <li>Understand the intuition behind Artificial Neural Networks</li>
                  <li>Understand the intuition behind Artificial Neural Networks</li>
                </ul>
            </div>
            </div>
          </div>
        </Section> */}
      </div>
    </>
  )
}

export default CourseDetails
