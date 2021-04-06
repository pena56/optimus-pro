import React from 'react'
import Link from 'next/link'
import { BsBarChart, BsClipboardData, BsClockFill, BsColumnsGap, BsExclude, BsServer } from 'react-icons/bs'

const PlanCard = ({id, title, oldPrice, price, points, slug }) => {
  console.log(points)
  return (
    <div className='col-md-6 col-lg-6 col-xl-4 mx-auto'>
      <div className='sub__card'>
        <BsClipboardData className="card__icon" />
        <div className='card__title'>
          <h4>{title}</h4>
        </div>
        <h4 className="del"><del>${oldPrice}</del></h4>
        <h2 className='amount'>${price}<small>/month</small></h2>
        <Link href={`/plans/${slug}`}>
          <a className='course_btn'>Sign me up</a>
        </Link>
        <ul className='points'>
          
          {points.map((point) => {
            const {list} = point
            return <li key={point.id} > <BsBarChart className="list__icon" /> {list}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default PlanCard
