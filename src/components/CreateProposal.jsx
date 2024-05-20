import React from "react";
import ProposalQuestions from "./ProposalQuestions";
import JobDetails from "./JobDetails";
import ProposalForm from "./ProposalForm";

const CreateProposal = () => {;

  return (
    <div className="mx-auto flex flex-col justify-center w-4/5 p-6">
      <h1 className="text-4xl font-semibold mb-4">Submit a Proposal</h1>

      <ProposalQuestions />
      <JobDetails />
      <ProposalForm />
    </div>
  );
};

export default CreateProposal;
