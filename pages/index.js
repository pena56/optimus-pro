import React from 'react'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Link from 'next/link'
import { CourseContext } from '@/context/course'
import FeaturedCourse from '@/components/FeaturedCourses'
import PlanList from '@/components/PlanList'
import WhySection from '../components/WhySection'

export default function Home() {
  const data = React.useContext(CourseContext)

  return (
    <div>
      <>
        <Hero text=' let us help you achieve financial freedom.' />
        

        <section className='about__section'>
          <Section>
            <div className='row'>
              <div className='col-md-6 mx-auto'>
                <div className='about_text'>
                  <h3 className='about_title'>About us</h3>
                  <div className='content'>
                    <h5 className="sub_title">A group of professionals committed to excellence...</h5>
                    <p>
                       Optimus Pro Traders is a team of sophisticated,
                      passionate, and exceptional traders with years of
                      experience trading and investing in the financial markets
                      — ranging from Forex, Bitcoin (and other
                      Cryptocurrencies), Stocks and Commodities. We are
                      committed to bringing you excellent knowledge, building
                      competent trading skills and presenting highly profitable
                      opportunities in the financial markets.
                    </p>
                    <p><b>☆Mission</b> Is to build a platform that enables each member not only build another source of income but also to create wealth for themselves.<b> ☆Values  ☆Integrity ☆Excellence ☆Passion
                     ☆Accountability ☆Commitment ☆Client satisfaction and ☆Consistency.</b></p>
                    <Link href="/about">
                      <a className="read_btn"> Read more...</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md-6 mx-auto'>
                <img src='/student.jpeg' alt='' className='about_img' />
              </div>
            </div>
          </Section>
        </section>

        <FeaturedCourse />

        <PlanList />

        <WhySection />

        <Section>
          <div className='why__optimus'>
            <div className='row'>
              <div className='col-md-6 mx-auto'>
                <div className='text__container'>
                  <h2 className='why__title'>Why Optimus Pro</h2>
                  <p>
                    Optimus pro is a team of industry experts, from fundamental
                    analysts, technical analysts, risk managers, trading
                    psychologists, blockchain developers and enthusiasts, and 
                    personal development experts.
                  </p>

                  <h3 className='why__title'>
                    Levitating your financial instability 
                  </h3>
                  <p>
                    Not only is a optimus pro leading trading, education
                    company/community; it’s an emerging innovative blockchain
                    technology company, with the aim of  optimizing the
                    opportunities of wealth creation through blockchain
                    technology for our members.
                  </p>
                  <h3 className='why__title'>Our Aim</h3>
                  <p>
                    We aim at helping each member of Optimus Pro become
                    financially free, through our quality trading education and
                    coaching, intensive mentorship programs (which covers
                    trading psychology, personal development, goal settings and
                    planning uniquely designed to meet the need of each member
                    specifically), we also give high probability analysis,
                    research and reports on potential trading and investment
                    opportunities, account management services and more.
                  </p>
                </div>
              </div>
              <div className='col-md-6 mx-auto'>
                <div className='why__img'>
                  <img src='/whyphotos.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className='market_section'>
          <Section>
            <div className='section__title'>
              <h2>The Markets</h2>
              <div className='underline'></div>
            </div>
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
        </div>

        <Section>
          <Title title='Meet our Leadership team' />
          <div className='team__container'>
            <div className='row'>
              <div className='col-md-4 col-sm-4  mx-auto'>
                <div className='team__card'>
                  <div>
                    <img
                      src='./user1.jpg'
                      alt='team-image'
                      className='team__img'
                    />
                    <div className='text'>
                      <h4 className='username'>Michael Sloggett</h4>
                      <h5>Founder - Lead Trainer & Technical Analyst</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 mx-auto'>
                <div className='team__card'>
                  <div>
                    <img
                      src='./user2.jpg'
                      alt='team-image'
                      className='team__img'
                    />
                    <div className='text'>
                      <h4 className='username'>Jason Grigg</h4>
                      <h5>Founder - Lead Trainer & Technical Analyst</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 mx-auto'>
                <div className='team__card'>
                  <div>
                    <img
                      src='./user3.jpg'
                      alt='team-image'
                      className='team__img'
                    />
                    <div className='text'>
                      <h4 className='username'>Michael Sloggett</h4>
                      <h5>Founder - Lead Trainer & Technical Analyst</h5>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </Section>
        <Section>
          <Title title='Out Insights' />

          <div className='recent__blog'>
            <div className='row'>
              <div className='col-md-4 mx-auto'>
                <Link href='/default'>
                  <a>
                    <article className='article__card'>
                      <img
                        src='./aboutus.jpg'
                        alt='blogpost'
                        className='article__img'
                      />
                      <div className='blog-text'>
                        <h4 className='blog__title'>
                          Introduction to forex trading...
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magnam placeat perspiciatis dolore.
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>
              </div>

              <div className='col-md-4 mx-auto'>
                <Link href='/default'>
                  <a>
                    <article className='article__card'>
                      <img
                        src='./aboutus.jpg'
                        alt='blogpost'
                        className='article__img'
                      />
                      <div className='blog-text'>
                        <h4 className='blog__title'>
                          Introduction to Cryptocurrency trading...
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magnam placeat perspiciatis dolore.
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>
              </div>

              <div className='col-md-4 mx-auto'>
                <Link href='/default'>
                  <a>
                    <article className='article__card'>
                      <img
                        src='./aboutus.jpg'
                        alt='blogpost'
                        className='article__img'
                      />
                      <div className='blog-text'>
                        <h4 className='blog__title'>
                          Introduction to forex trading...
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magnam placeat perspiciatis dolore.
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>
              </div>
            </div>
            <div className='blog__btn'>
              <Link href='/default'>
                <a>Discover more</a>
              </Link>
            </div>
          </div>
        </Section>

        <Section>
          <Title title='Hear What others are saying' />
          <div className='testimone'>
            <div className='row'>
              <div className='col-md-4 mx-auto'>
                <div className='customer__card'>
                  <p>
                    The reason we worked with Relevant Software is that they
                    were very proactive about getting information from us. Other
                    companies move slowly.
                  </p>
                  <div className='user'>
                    <img src='/user.jpg' alt='username' />
                    <div>
                      <h6 className='name'>Jokjon Drook</h6>
                      <small>CTO Of Olive Geeks</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mx-auto'>
                <div className='customer__card'>
                  <p>The reason we worked with Relevant Software is that they
                    were very proactive about getting information from us. Other
                    companies move slowly.</p>
                  <div className='user'>
                    <img src='/user.jpg' alt='username' />
                    <div>
                      <h6 className='name'>Jokjon Drook</h6>
                      <small>CTO Of Olive Geeks</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mx-auto'>
                <div className='customer__card'>
                  <p>The reason we worked with Relevant Software is that they
                    were very proactive about getting information from us. Other
                    companies move slowly.</p>
                  <div className='user'>
                    <img src='/user.jpg' alt='username' />
                    <div>
                      <h6 className='name'>Jokjon Drook</h6>
                      <small>CTO Of Olive Geeks</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    </div>
  )
}
