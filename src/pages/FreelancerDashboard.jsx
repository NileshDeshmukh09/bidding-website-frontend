import React from 'react'
import FreelancerJobList from '../components/FreelanceerJobList'

const FreelancerDashboard = () => {
  return (
    <div className='mx-20 my-20' >

      <div className='px-6 py-4'>
    <h1 className='text-2xl font-bold'><span className='text-3xl font-bond text-[#00B386]'>Freelancer : </span> Jobs you might like</h1>
      <p className='text-sm mt-3 mb-2 text-[#898989]'>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
      </div>
      

      <FreelancerJobList/>
      </div>
  )
}

export default FreelancerDashboard