import Link from 'next/link'
import React from 'react'
import Section from './Section'

const EmptyCart = () => {
  return (
    <Section>
      <div className='empty_cart'>
        <div>
          <h3>Empty Cart...</h3>
          <Link href='/'>
            <a className='action__btn'>Fill it...</a>
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default EmptyCart
