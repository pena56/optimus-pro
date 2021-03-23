import Layout from '@/components/Layout'
import Section from '@/components/Section'
import React from 'react'
import Head from 'next/head'
import SectionTitle from '@/components/SectionTitle'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'

const coursesPage = () => {
  return (
    <Layout>
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
      <section className='course__hero'>
        <div className='container'>
          <h1 className='title'>Learn From the best</h1>
          <h4>Real World Expert traching Real world Skills</h4>
        </div>
      </section>

      <Section>
        <SectionTitle title='Cryptocurrency Courses' />
        <hr/>
        <div className='course__section'>
          <div className='row'>
            <div className='col-md-4 mx-auto'>
              <div className='course__card'>
                <img src='/crypto.jpg' alt='Crypto' className='course__img' />
                <div className='text'>
                  <h5 className='course__title'>
                    Introduction to Cryptocurrency
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <Link href=''>
                    <a className='course_btn'><MdShoppingCart className="btn__icon" /> Add to cart </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 mx-auto'>
              <div className='course__card'>
                <img src='/crypto.jpg' alt='Crypto' className='course__img' />
                <div className='text'>
                  <h5 className='course__title'>
                    Introduction to Cryptocurrency
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <Link href=''>
                    <a className='course_btn'><MdShoppingCart className="btn__icon" /> Add to cart</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 mx-auto'>
              <div className='course__card'>
                <img src='/crypto.jpg' alt='Crypto' className='course__img' />
                <div className='text'>
                  <h5 className='course__title'>
                    Introduction to Cryptocurrency
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <Link href=''>
                    <a className='course_btn'><MdShoppingCart className="btn__icon" /> Add to cart</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle title='Forex Courses.' />
        <hr/>
      </Section>
      <Section>
        <SectionTitle title='Stock & Commodities Courses.' />
        <hr/>
      </Section>
    </Layout>
  )
}

export default coursesPage
