import React, { useState, useEffect } from "react";
import { getAllJobs } from "../services/jobs.services";
import { useAuthToken } from "../hooks/useAuth";
import LoadingSpinner from "../common/Loading";
import JobCard from "../common/cards/JobCard";

const FreelancerJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useAuthToken();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      console.log('see all jobs : freelancer Dashboard')
      try {
        const res = await getAllJobs({token});
  
        if (res.data && res.data.success) {
          setLoading(false);
          setJobs(res.data.jobs);
          console.log("getJobs : ", res.data);
          setError(null);
        } else {
          setLoading(false);
          setError(res.message || "Failed to fetch job.");
        }
      } catch (error) {
        setLoading(false);
        setError("An error occurred while fetch job.");
        console.error("Error fetch job:", error);
      }
    };
    fetchJobs();
  }, [token]);

  if(!loading && jobs.length === 0 ) {
    return (
      <div className="flex bg-slate-200 justify-center items-center h-screen">
        <p className="text-3xl">No jobs Found!</p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-7 ">
      {loading && <LoadingSpinner/>}
      {error && <p>Error: {error}</p>}
        { jobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default FreelancerJobList;
