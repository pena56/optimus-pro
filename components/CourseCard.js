import React from 'react'
import Link from 'next/link'
import { MdContactPhone, MdShoppingCart } from 'react-icons/md'
import { fromImgToUrl } from '@/lib/urls'
import { formatPrice } from '@/utils/helpers'

const CourseCard = ({ image, title, amount, meta_description, slug }) => {
  return (
    <div className='col-md-6 mx-auto'>
      <a>
        <div className='course__card'>
          <img src={fromImgToUrl(image)} alt={title} className='course__img' />
          {/* <div className="category">Cryptocurrency</div> */}
          <div className='text'>
              <h4 className='course__title'>{title}</h4>
            <p>{meta_description}</p>
            {/* <p className='amount'>{formatPrice(amount)}</p> */}
            <Link href={`/courses/${slug}`}>
              <button className='course_btn'>Start now</button>
            </Link>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CourseCard
