import React from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "../PrimaryButton";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../SecondaryButton";

const JobCard = ({ job }) => {
  const userType = useSelector((state) => state.user.userType);
  const navigate = useNavigate();


  const handleCreateProposal = () => {
    navigate(`/jobs/${job.id}/create-proposal`, { state: { job } });
  };

  const handleReviewProposals = () => {
    navigate(`/jobs/${job.id}/review-proposals`, { state: { job } });
  };

  // Limiting the description to 4 lines and showing ellipsis for overflow
  const descriptionStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 4, // Limiting to 4 lines
    maxHeight: "4.5em", // Adjust as per your design
  };

  return (
    <div className="border border-[#d9d6d6] bg-[#f5f5f4] shadow-lg rounded-lg p-4">
      <h3 className="text-xl mb-5 uppercase font-bold">{job.title}</h3>
      <div className="flex justify-between text-[#44475B] font-medium">
        <p className="mr-2">Experience</p>
        <p className="mr-2">Project scope</p>
      </div>
      <div className="flex justify-between text-[#00B786] font-semibold">
        <p className="mr-2">{job.experience}</p>
        <p className="mr-2">{job.projectScope}</p>
      </div>
      <p className="mb-4 mt-3 text-sm text-[#717171] font-medium overflow-hidden line-clamp-4">
        {job.description}
      </p>
      <div>
        <p className="font-bold">Skills:</p>
        <ul>
          {job.skills.map((skill, index) => (
            <li
              key={index}
              className="m-1 px-2 py-1 border font-normal inline-block border-[#d9d6d6] text-[#3b3030] bg-[#e1e1e1] rounded-md"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {userType === "FREELANCER" && (
        <div>
          <SecondaryButton
            children={`Create Proposal`}
            onClick={handleCreateProposal}
          />
        </div>
      )}

      {userType === "CLIENT" && (
        <div>
          <SecondaryButton children={`Review proposals`} onClick={handleReviewProposals} />
        
        </div>
      )}
    </div>
  );
};

export default JobCard;
