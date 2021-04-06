import React from 'react'
import { API_URL } from '@/lib/urls'
// import { useRouter } from 'next/router'
import Section from '@/components/Section'
import { BsBarChart, BsClipboardData } from 'react-icons/bs'
import Head from 'next/head'
// import { PlanContext } from '@/context/plans'
// import Layout from '@/components/Layout'

const PlansPage = ({ plan }) => {
  // const response = React.useContext(PlanContext)
  // const { plans } = response
  // const point = plans.point
  console.log(plan)
  // const { points } = plans
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Head>
        {plan.title && <title>{plan.title}</title>}
        {plan.meta_description && (
          <meta name='description' content={plan.meta_description} />
        )}
      </Head>
      <>
        <Section>
          <div className='singlePage_section'>
            <h3 className='single_title'>
              You're almost there! Complete your order.
            </h3>
            <div className='row'>
              <div className='col-md-6 col-xl-4 mx-auto'>
                <div className='sub__card cartCard'>
                  <BsClipboardData className='card__icon' />
                  <div className='card__title'>
                    <h4>{plan.title}</h4>
                  </div>
                  <h4 className='del'>
                    <del>${plan.oldPrice}</del>
                  </h4>
                  <h2 className='amount'>
                    ${plan.price}
                    <small>/month</small>
                  </h2>
                  <ul className='points'>
                    {plan.points.map((point) => {
                      const { list } = point
                      return (
                        <li key={point.id}>
                          {' '}
                          <BsBarChart className='list__icon' /> {list}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className='col-md-8 col-lg-8 mx-auto'>
                <div className='cartDetails'>
                  <h3 className='single_title'>{plan.title}</h3>
                  <p className='meta_des'>{plan.meta_description}</p>
                  <div className='row'>
                    <div className='col-md-5'>
                      <h4 className='single_price'> ${plan.price}</h4>
                      <button className='action__btn'>Sign me up</button>
                    </div>
                  </div>
                </div>
                <div className='description__section'>
              <h4 className="des__title">Description</h4>
              <div className='row'>
                <div className='col-md-7'>
                  <h5 className='single_title'>
                    Want to trade crypto or forex but have no time to learn?
                    Join now and here’s what you’ll get:
                  </h5>
                  <p>{plan.content}</p>
                  <ul className='points'>
                    {plan.points.map((point) => {
                      const { list } = point
                      return (
                        <li key={point.id} className="points__list">
                          {' '}
                          <BsBarChart className='list__icon' /> {list}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
              </div>
            </div>
            
          </div>
        </Section>
      </>
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const plan_res = await fetch(`${API_URL}/plans/?slug=${slug}`)
  const found = await plan_res.json()

  return {
    props: {
      plan: found[0],
    },
  }
}

export async function getStaticPaths() {
  const plan_res = await fetch(`${API_URL}/plans/`)

  const plans = await plan_res.json()

  return {
    paths: plans.map((plan) => ({
      params: { slug: String(plan.slug) },
    })),
    fallback: false, // Tell next to show 404 if the params is not matched
  }
}

export default PlansPage
