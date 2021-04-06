import React from 'react'
import { PlanContext } from '@/context/plans'
import PlanCard from '@/components/PlanCard'
import Section from './Section'
import Head from 'next/head'



export default function PlanList(){
  const response = React.useContext(PlanContext)

  const { plans } = response

  // console.log(response.plans)

  return (
    <div className='sub__section'>
    <Head></Head>
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
            {plans.map((plan) => {
              const { id, title, price, oldPrice, slug, points } = plan
              return (
                <PlanCard
                  key={id}
                  slug={slug}
                  points={points}
                  title={title}
                  price={price}
                  oldPrice={oldPrice}
                />
              )
            })}
          </div>
        </div>
      </Section>
    </div>
  )
}





