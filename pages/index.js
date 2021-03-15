import React from 'react'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Head from 'next/head'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import Layout from '../components/Layout'
import styles from '@/styles/Home.module.css'
import { FiTrello, FiFramer, FiFigma } from 'react-icons/fi'

export default function Home() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isLoop, setIsLoop] = React.useState(true)
  return (
    <div>
      <Head>
        <title>Optimus Pro</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossorigin='anonymous'
        ></link>
      </Head>

      <Layout>
        <Hero text='Welcome to Optimus Pro Inc.' />
        <Section>
          <Title title='What we do' />
          <div className='service__section row'>
            <div className='col-md-6'>
              <div className='service__img'>
                <img
                  src='./academy.jpg'
                  alt='Academy'
                  className='academy__img'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='service__content'>
                <div className='container'>
                  <h3>Forex Academy</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    corrupti dolore adipisci a, quaerat, eos quae rerum quod,
                    aliquid eveniet consectetur accusantium deserunt sunt
                    voluptatibus laudantium. Quaerat cumque illum error.
                  </p>
                  <Link href='/'>
                    <a className='btn'>Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='service__section row'>
            <div className='col-md-6 order-sm-1'>
              <div className='service__content'>
                <div className='container'>
                  <h3>Trading Signals</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    corrupti dolore adipisci a, quaerat, eos quae rerum quod,
                    aliquid eveniet consectetur accusantium deserunt sunt
                    voluptatibus laudantium. Quaerat cumque illum error.
                  </p>
                  <Link href='/'>
                    <a className='btn'>Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-6 order-2 order-'>
              <div className='service__img'>
                <img
                  src='https://res.cloudinary.com/calebbenjin/image/upload/v1615720347/invest_cpfnmw.jpg'
                  alt='Academy'
                  className='academy__img'
                />
              </div>
              {/* <div className='service__video'>
                <ReactPlayer url='https://res.cloudinary.com/calebbenjin/video/upload/v1615718263/signals_nc8lwe.mp4' playing={isPlaying} loop={isLoop} className={styles.video} />
              </div> */}
            </div>
          </div>

          <div className='service__section row'>
            <div className='col-md-6'>
              <div className='service__img'>
                <img
                  src='https://res.cloudinary.com/calebbenjin/image/upload/v1615720347/invest_cpfnmw.jpg'
                  alt='Academy'
                  className='academy__img'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='service__content'>
                <div className='container'>
                  <h3>Investment</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    corrupti dolore adipisci a, quaerat, eos quae rerum quod,
                    aliquid eveniet consectetur accusantium deserunt sunt
                    voluptatibus laudantium. Quaerat cumque illum error.
                  </p>
                  <Link href='/'>
                    <a className='btn'>Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <section className='section our__story'>
          <div className='story__content section-center'>
            <h1 className='story__title'>What's our story?</h1>

            <div className='who_we_are'>
              <h4>Who we are</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                minima quod qui rem, quo voluptas maxime dolorum laudantium
                beatae delectus. quo voluptas maxime dolorum laudantium beatae
                delectus. quo voluptas maxime dolorum laudantium beatae
                delectus.
              </p>
            </div>
            <div className='who_we_are'>
              <h4>Our Vision</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                minima quod qui rem, quo voluptas maxime dolorum laudantium
                beatae delectus.
              </p>
            </div>
            <div className='who_we_are'>
              <h4>Our Mission</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                minima quod qui rem, quo voluptas maxime dolorum laudantium
                beatae delectus.
              </p>
              <Link href='/default'>
                <a>Learn More</a>
              </Link>
            </div>
          </div>
        </section>

        <Section>
          <Title title='Why Optimus pro' />
          <div className='row'>
            <div className='col-md-4'>
              <div className='why__card'>
                <div className='icon_box'>
                  <FiTrello className='icon' />
                </div>
                <div className='text'>
                  <h4>Why Optimus</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum ipsa atque dolor totam? Sed totam eum quis, harum quia
                    voluptates!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='why__card'>
                <div className='icon_box'>
                  <FiFramer className='icon' />
                </div>
                <div className='text'>
                  <h4>Why Optimus</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum ipsa atque dolor totam? Sed totam eum quis, harum quia
                    voluptates!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='why__card'>
                <div className='icon_box'>
                  <FiFigma className='icon' />
                </div>
                <div className='text'>
                  <h4>Why Optimus</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum ipsa atque dolor totam? Sed totam eum quis, harum quia
                    voluptates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <Title title='The Markets' />
          <div className='row'>
            <div className='col-md-6'>
              <div className='market__card crypto'>
                <h2>Cryptocurrency</h2>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='market__card forex'>
                <h2>Forex</h2>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='market__card stock'>
                <h2>Stock</h2>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='market__card commodity'>
                <h2>Commodites</h2>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <Title title='Meet our Leadership team' />
          <div className='team__container'>
            <div className='row'>
              <div className='col-md-4 col-sm-4  mx-auto'>
                <div className='team__card'>
                  <div>
                    <img
                      src='./user.jpg'
                      alt='team-image'
                      className='team__img'
                    />
                    <div className='text'>
                      <h4 className="username">Michael Sloggett</h4>
                      <h5>Founder - Lead Trainer & Technical Analyst</h5>
                      {/* <p>
                        Michael is one of our founders and Lead Trainers here at
                        MBA. Michael has been a profitable trader.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 mx-auto'>
                <div className='team__card'>
                  <div>
                    <img
                      src='./user.jpg'
                      alt='team-image'
                      className='team__img'
                    />
                    <div className='text'>
                      <h4 className="username">Jason Grigg</h4>
                      <h5>Founder - Lead Trainer & Technical Analyst</h5>
                      {/* <p>
                        Michael is one of our founders and Lead Trainers here at
                        MBA. Michael has been a profitable trader.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 mx-auto'>
                <div className='team__card'>
                  <div>
                    <img
                      src='./user.jpg'
                      alt='team-image'
                      className='team__img'
                    />
                    <div className='text'>
                      <h4 className="username">Michael Sloggett</h4>
                      <h5>Founder - Lead Trainer & Technical Analyst</h5>
                      {/* <p>
                        Michael is one of our founders and Lead Trainers here at
                        MBA. Michael has been a profitable trader.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <Title title="Out Insights" />

          <div className="recent__blog">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <article className="article__card">

                </article>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}
