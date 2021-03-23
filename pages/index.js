import React from 'react'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Head from 'next/head'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import Layout from '../components/Layout'
import styles from '@/styles/Home.module.css'
import { BiPhone} from 'react-icons/bi'
import { MdContactPhone, MdShoppingCart } from 'react-icons/md'
import { BsBarChart, BsClipboardData, BsClockFill, BsColumnsGap, BsExclude, BsServer } from 'react-icons/bs'

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
        <Hero text=' let us help you achieve financial freedom.' />

        

        <Title title='What we do' />

        <Section>
          <div className='why__optimus'>
            <div className='row'>
              <div className='col-md-6 mx-auto'>
                <div className='text__container'>
                  <h3 className='why__title'>
                    {' '}
                    We are committed to helping you transform your finance.
                  </h3>
                  <p>
                    We are committed to helping you transform your finance by
                    guiding you through every step necessary to achieve your
                    financial goals. First by making you a consistent profitable
                    trader, so that you can attain financial stability and live
                    the life you desire.
                  </p>

                  <h3 className='why__title'>
                    We turn beginners to Pro traders.
                  </h3>
                  <p>
                    We make a Pro trader out of you regardless of your level;
                    whether you are an absolute Beginner, Intermediate or even
                    an Advance trader, we have something to offer you through
                    our years of experience and academic excellence.
                  </p>
                  <h3 className='why__title'>
                    We offer quality mentorship program.
                  </h3>
                  <p>
                    We offer quality mentorship program, one on one coaching,
                    life-long membership, access to our OptimusProTrading Room
                    where we do in-real time analysis and take live trades.
                  </p>
                  <h3 className='why__title'>We are market watchers</h3>
                  <p>
                    {' '}
                    We are market watchers. We research and analyze the markets
                    24/7 in order to bring you the best profitable trading and
                    investing opportunities to maximize your earnings.
                  </p>
                  <h3 className='why__title'>
                    {' '}
                    We hold our webinars every week.
                  </h3>
                  <p>
                    {' '}
                    We hold our webinars every month inviting other experienced
                    traders to share their views, knowledge and trading
                    experience with you in our community.
                  </p>
                </div>
              </div>
              <div className='col-md-6 mx-auto'>
                <div className='why__img'>
                  <img src='/sekcja1.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className='course__category'>
          <Section>
            <div className='section__title'>
              <h2>Learn Trading from Profesionals in the industry.</h2>
              {/* <h4 className="sub__title">Extensive Trading Courses.</h4> */}
              <h4 className='sub__title'>
                Cryptocurrency, Forex, Stock & Commodities
              </h4>
              {/* <h5>
              We’ll get you unlimited access to our private learning & trading community with exclusive webinars, daily signals & premium market reports by certified analysts and experienced traders.
              </h5> */}
            </div>
            
            <div className='row'>
              <div className='col-md-4 mx-auto'>
                <div className='course__card'>
                  <img src='/crypto.jpg' alt='Crypto' className='course__img' />
                  <div className='text'>
                    <h5 className='course__title'>Introduction to Cryptocurrency</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <Link href=''>
                      <a className='course_btn'><MdShoppingCart className="btn__icon" /> Add to cart</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mx-auto'>
                <div className='course__card'>
                  <img src='/forex.jpg' alt='Crypto' className='course__img' />
                  <div className='text'>
                    <h5 className='course__title'>Introduction to Forex</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <Link href=''>
                      <a className='course_btn'><MdShoppingCart className="btn__icon" /> Add to cart</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mx-auto'>
                <div className='course__card'>
                  <img
                    src='/commodity.jpg'
                    alt='Crypto'
                    className='course__img'
                  />
                  <div className='text'>
                    <h5 className='course__title'>Introduction to  Stock & commodities</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <Link href=''>
                      <a className='course_btn'><MdShoppingCart className="btn__icon" /> Add to cart</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='blog__btn'>
              <Link href='/courses'>
                <a>Discover more Courses</a>
              </Link>
            </div>
          </Section>
        </div>

        <div className='sub__section'>
          <Section>
            <div className='section__title'>
              <h2>OptimusPro Subscriptions</h2>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a
                dicta consequuntur necessitatibus autem iste?
              </h5>
            </div>

            <div className='subscrib__card'>
              <div className='row'>
                <div className='col-md-6 col-lg-4 mx-auto'>
                  <div className='sub__card'>
                    <BsBarChart className="card__icon" />
                    <div className='card__title'>
                      <h4>Optimus Starter</h4>
                    </div>
                    <h4 className="del"><del>$150</del></h4>
                    <h2 className='amount'>$75<small>/month</small></h2>
                    <ul className='points'>
                      <li> <BsClockFill className="list__icon" /> Time-saving plan for traders</li>
                      <li> <BsServer className="list__icon" /> 3-5 weekly Signals on average</li>
                      <li> <BiPhone className="list__icon" /> Crypto, forex, stocks, & commodities.</li>
                      <li> <MdContactPhone className="list__icon" /> Spot trades only.</li>
                      <li> <MdContactPhone className="list__icon" /> Telegram alerts.</li>
                      <li> <MdContactPhone className="list__icon" /> Basic support.</li>
                    </ul>
                    <Link href=''>
                      <a className='course_btn'>Sign me up</a>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 col-lg-4 mx-auto'>
                  <div className='sub__card'>
                    <BsClipboardData className="card__icon" />
                    <div className='card__title'>
                      <h4>Optimus Sliver</h4>
                    </div>
                    <h4 className="del"><del>$250</del></h4>
                    <h2 className='amount'>$125<small>/month</small></h2>
                    <ul className='points'>
                      <li> <BsClockFill className="list__icon" /> Time-saving plan for traders</li>
                      <li> <BsServer className="list__icon" /> 5-10 weekly Signals on average</li>
                      <li> <BiPhone className="list__icon" /> Crypto, forex, stocks, & commodities.</li>
                      <li> <MdContactPhone className="list__icon" /> Spot trades only.</li>
                      <li> <MdContactPhone className="list__icon" /> Telegram & Discord alerts</li>
                      <li> <MdContactPhone className="list__icon" /> Trading Webinars</li>
                      <li> <MdContactPhone className="list__icon" /> Reports</li>
                      <li> <MdContactPhone className="list__icon" /> Mentorship insight</li>
                    </ul>

                    <Link href=''>
                      <a className='course_btn'>Sign me up</a>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 col-lg-4 mx-auto'>
                  <div className='sub__card'>
                    <BsColumnsGap className="card__icon" />
                    <div className='card__title'>
                      <h4>Optimus Gold</h4>
                    </div>
                    <h4 className="del"><del>$400</del></h4>
                    <h2 className='amount'>$200<small>/month</small></h2>
                    <ul className='points'>
                      <li> <BsClockFill className="list__icon" /> All 2 membership plans included+</li>
                      <li> <BsServer className="list__icon" /> Trading Education for crypto & forex traders beginner-friendly.</li>
                      <li> <BiPhone className="list__icon" /> Crypto, forex, stocks, and commodities.</li>
                      <li> <MdContactPhone className="list__icon" /> Spot, margin, and futures</li>
                      <li> <MdContactPhone className="list__icon" /> Frequent updates.</li>
                      <li> <MdContactPhone className="list__icon" /> 24/7 priority help. (Community Forum)</li>
                      <li> <MdContactPhone className="list__icon" /> Frequent Reports.</li>
                      <li> <MdContactPhone className="list__icon" /> Closed webinars.</li>
                      <li> <MdContactPhone className="list__icon" /> Screensharing sessions (Live analysis and trades).</li>
                      <li> <MdContactPhone className="list__icon" /> Portfolio Management Insight.</li>
                      <li> <MdContactPhone className="list__icon" /> Discount on complete trading courses.</li>
                      <li> <MdContactPhone className="list__icon" /> Successful Trading Psychology Training.</li>
                      <li> <MdContactPhone className="list__icon" /> Group Mentorship Sessions.</li>
                    </ul>

                    <Link href=''>
                      <a className='course_btn'>Sign me up</a>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 col-lg-4 mx-auto'>
                  <div className='sub__card'>
                  <BsExclude className="card__icon" />
                    <div className='card__title'>
                      <h4>Optimus Prime</h4>
                    </div>
                    <h4 className="del"><del>$500</del></h4>
                    <h2 className='amount'>$250<small>/month</small></h2>
                    <ul className='points'>
                      <li> <BsClockFill className="list__icon" /> All three membership plans included+</li>
                      <li> <BsServer className="list__icon" /> 1-on-1 personalized mentorship from our team of experienced professionals.</li>
                      <li> <BiPhone className="list__icon" /> Customized signals designed to meet your goals.</li>
                      <li> <MdContactPhone className="list__icon" /> Crypto, forex, stocks, and commodities.</li>
                      <li> <MdContactPhone className="list__icon" /> Spot, margin, and futures</li>
                      <li> <MdContactPhone className="list__icon" /> Personalized updates</li>
                      <li> <MdContactPhone className="list__icon" /> 24/7 priority help</li>
                      <li> <MdContactPhone className="list__icon" /> Closed mentoring chats.</li>
                      <li> <MdContactPhone className="list__icon" /> On-demand Reports.</li>
                      <li> <MdContactPhone className="list__icon" /> Private webinars.</li>
                      <li> <MdContactPhone className="list__icon" /> Screensharing sessions (Live analysis and trades).</li>
                      <li> <MdContactPhone className="list__icon" /> Personalized Portfolio Management Guide.</li>
                      <li> <MdContactPhone className="list__icon" /> Discount on trading courses.</li>
                      <li> <MdContactPhone className="list__icon" /> Customized Financial Growth Strategy</li>
                      <li> <MdContactPhone className="list__icon" /> Successful Trading Psychology Training</li>
                      <li> <MdContactPhone className="list__icon" /> Early Access to services.</li>
                      <li> <MdContactPhone className="list__icon" /> Access to private and presale whitel-listing (on upcoming projects).</li>
                    </ul>
                    <Link href=''>
                      <a className='course_btn'>Sign me up</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
        {/* <Section>
          <div className='section__title'>
            <h2>Join Our Investment plan</h2>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a
              dicta consequuntur necessitatibus autem iste?
            </h5>
          </div>
          <div className='invest__card'>
            <img src='/stock.jpg' alt='stock' className='invest__img' />
            <div className='invest__text'>
              <article>
                <h4>Text Area...</h4>
              </article>
            </div>
          </div>
        </Section> */}

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

                  <h2 className='why__title'>
                    Levitating your financial instability 
                  </h2>
                  <p>
                    Not only is a optimus pro leading trading, education
                    company/community; it’s an emerging innovative blockchain
                    technology company, with the aim of  optimizing the
                    opportunities of wealth creation through blockchain
                    technology for our members.
                  </p>
                  <h2 className='why__title'>Our Aim</h2>
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
                  <img src='/section_ebook.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* <section className='section our__story'>
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
        </section> */}

        {/* <Section>
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
        </Section> */}

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
                      <h4 className='username'>Michael Sloggett</h4>
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
                      <h4 className='username'>Jason Grigg</h4>
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
                      <h4 className='username'>Michael Sloggett</h4>
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
          <Title title='Out Insights' />

          <div className='recent__blog'>
            <div className='row'>
              <div className='col-md-4 mx-auto'>
                <Link href='/default'>
                  <a>
                    <article className='article__card'>
                      <img
                        src='./academy.jpg'
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
                        {/* <Link href='/default'>
                          <a className='btn'>Continue reading...</a>
                        </Link> */}
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
                        src='./crypto.jpg'
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
                        {/* <Link href='/default'>
                          <a className='btn'>Continue reading...</a>
                        </Link> */}
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
                        src='./academy.jpg'
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
                        {/* <Link href='/default'>
                          <a className='btn'>Continue reading...</a>
                        </Link> */}
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
                    companies move slowly, but these guys move fast which is
                    what we liked about them. Before we even kicked off the
                    project, we would go into a lot of detail. That was quite
                    impressive for us.
                  </p>
                  <div className='user'>
                    <img src='/user.jpg' alt='username' />
                    <div>
                      <h6 className='name'>Jokjon Drook</h6>
                      <p>CTO Of Olive Geeks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mx-auto'>
                <div className='customer__card'>
                  <p>
                    The reason we worked with Relevant Software is that they
                    were very proactive about getting information from us. Other
                    companies move slowly, but these guys move fast which is
                    what we liked about them. Before we even kicked off the
                    project, we would go into a lot of detail. That was quite
                    impressive for us.
                  </p>
                  <div className='user'>
                    <img src='/user.jpg' alt='username' />
                    <div>
                      <h6 className='name'>Jokjon Drook</h6>
                      <p>CTO Of Olive Geeks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mx-auto'>
                <div className='customer__card'>
                  <p>
                    The reason we worked with Relevant Software is that they
                    were very proactive about getting information from us. Other
                    companies move slowly, but these guys move fast which is
                    what we liked about them. Before we even kicked off the
                    project, we would go into a lot of detail. That was quite
                    impressive for us.
                  </p>
                  <div className='user'>
                    <img src='/user.jpg' alt='username' />
                    <div>
                      <h6 className='name'>Jokjon Drook</h6>
                      <p>CTO Of Olive Geeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}
