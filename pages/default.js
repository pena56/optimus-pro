import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import React from 'react'

const defaultPage = () => {
  return (
    <Layout>
      <div className='default'>
        <Loading />
      </div>
    </Layout>
  )
}

export default defaultPage
