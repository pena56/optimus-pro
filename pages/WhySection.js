import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import aboutData from '../about'
import WhatCard from '@/components/WhatCard'

const WhySection = () => {
  const [about, setAbout] = React.useState(aboutData)

  return (
    <>
      <section className='whatWeDo_section'>
        <Section>
          <div className='section__title'>
            <h2>We we do</h2>
            <div className='underline'></div>
          </div>

          <div className='whatWeDo_cards'>
            <div className='row'>
              {about.map((item) => {
                return (
                  <WhatCard key={item.id} {...item} />
                )
              })}
            </div>
          </div>
        </Section>
      </section>
    </>
  )
}

export default WhySection
