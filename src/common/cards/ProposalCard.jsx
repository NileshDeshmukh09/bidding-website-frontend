import { useState } from "react";
import SecondaryButton from "../SecondaryButton";
import ModalContent from "../Modal/ModalContent";
import PrimaryButton from "../PrimaryButton";

export default function ProposalCard({ proposal, key , fetchProposals }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDownload = (coverLetter) => {
    // Open the coverLetter URL in a new tab to download the file
    window.open(coverLetter, "_blank");
  };
  return (
    <div key={key} className="border bg-white shadow-lg rounded-lg p-4 ">
      <p className="mb-4 mt-3 text-sm text-[#717171] font-medium overflow-hidden line-clamp-4">
        {proposal.description}
      </p>

      <div className=" flex items-center flex-col sm:flex-row sm:justify-between py-4">
        <p className="text-sm ">Expected Deadline : {proposal.deadline}</p>

        <p className="text-sm text-[#00B386]">STATUS : {proposal.status}</p>
      </div>

      <div className=" flex items-center flex-col sm:flex-row sm:justify-evenly">
        <div>
          <PrimaryButton children={`UPDATE STATUS`} onClick={handleOpen} />
          <ModalContent
            open={open}
            handleClose={handleClose}
            proposal={proposal}
            fetchProposals={fetchProposals}
          />
        </div>
        <SecondaryButton
          children={`Download File`}
          onClick={() => handleDownload(proposal.coverLetter)}
        />
      </div>
    </div>
  );
}
