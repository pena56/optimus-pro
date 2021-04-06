import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import { BiBrightness, BiAtom, BiBarChart } from 'react-icons/bi'
import { MdSchool } from 'react-icons/md'
import { GiTeacher } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import aboutData from '../about'
import WhatCard from '@/components/WhatCard'
import WhySection from './WhySection'

const about = () => {
  const [about, setAbout] = React.useState(aboutData)

  return (
    <>
      <section className='about__hero'>
        <div className='container'>
          <h1 className='title'>About OptimusPro Network</h1>
          <h4>Real World Expert traching Real world Skills</h4>
        </div>
      </section>
      <section className='about__section'>
        <Section>
          <div className='row'>
            <div className='col-md-6 mx-auto'>
              <div className='about_text'>
                <h3 className='about_title'>About us</h3>
                <div className='content'>
                  <h5 className='sub_title'>
                    A group of professionals committed to excellence...
                  </h5>
                  <p>
                     Optimus Pro Traders is a team of sophisticated, passionate,
                    and exceptional traders with years of experience trading and
                    investing in the financial markets — ranging from Forex,
                    Bitcoin (and other Cryptocurrencies), Stocks and
                    Commodities. We are committed to bringing you excellent
                    knowledge, building competent trading skills and presenting
                    highly profitable opportunities in the financial markets.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mx-auto'>
              <img src='/student.jpeg' alt='' className='about_img' />
            </div>
          </div>
        </Section>
      </section>

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
                  opportunities of wealth creation through blockchain technology
                  for our members.
                </p>
                <h3 className='why__title'>Our Aim</h3>
                <p>
                  We aim at helping each member of Optimus Pro become
                  financially free, through our quality trading education and
                  coaching, intensive mentorship programs (which covers trading
                  psychology, personal development, goal settings and planning
                  uniquely designed to meet the need of each member
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
    </>
  )
}

export default about
