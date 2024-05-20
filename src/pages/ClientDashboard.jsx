import React from 'react'
import JobForm from '../components/JobForm'
import PrimaryButton from '../common/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../common/SecondaryButton'

const ClientDashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jobs");
  }
  const handleNewJob = () => {
    navigate("/create-jobs")
  }
  return (
    <div className="flex bg-white gap-4 justify-center items-center h-screen">
     <PrimaryButton children="See All Jobs" onClick={handleClick}/>

     <SecondaryButton children={`Create New Job`} onClick={handleNewJob}/>
    
    </div>
  )
}

export default ClientDashboard