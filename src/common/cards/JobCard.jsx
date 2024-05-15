import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="border border-[#d9d6d6] shadow-sm rounded-lg p-4">
      <h3 className="text-xl mb-5 uppercase font-bold">{job.title}</h3>
      <div className="flex justify-between text-[#44475B] font-medium">
        <p className="mr-2">Experience</p>
        <p className="mr-2">Project scope</p>
      </div>
      <div className="flex justify-between text-[#00B786] font-semibold">
        <p className="mr-2">{job.experience}</p>
        <p className="mr-2">{job.projectScope}</p>
      </div>
      <p className="text-sm text-[#dc5757]">{job.description}</p>
      <div>
        <p className="font-bold">Skills:</p>
        <ul>
          {job.skills.map((skill, index) => (
            <li
              key={index}
              className="m-1 px-2 py-1 border font-normal inline-block border-[#d9d6d6] text-[#3b3030] bg-[#e1e1e1] rounded-lg"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobCard;
