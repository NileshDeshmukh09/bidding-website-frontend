// ProposalQuestions.js
import React from 'react';

const ProposalQuestions = () => {
  return (
    <div className="border border-[#d1cece] shadow-sm p-3 rounded-xl mx-2 my-3">
      <h3 className="text-lg font-semibold text-black">
        You will be asked to answer the following questions when submitting a proposal
      </h3>
      <ul className="list-decimal p-5">
        <li>Are you willing to sign an NDA?</li>
        <li>Describe your recent experience with similar projects</li>
        <li>Include a link to your GitHub profile and/or website</li>
      </ul>
    </div>
  );
};

export default ProposalQuestions;
