import React from 'react'
import JobForm from '../components/JobForm'
import PrimaryButton from '../common/PrimaryButton'
import { useNavigate } from 'react-router-dom'

const ClientDashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobs");
  }
  return (
    <div className=''>
     <PrimaryButton children="See All Jobs" onClick={handleClick}/>
    <JobForm/>
    </div>
  )
}

export default ClientDashboard