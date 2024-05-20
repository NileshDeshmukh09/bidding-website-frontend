import React, { useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate, useParams } from "react-router-dom";
import { submitProposal } from "../services/jobs.services";
import { useAuthToken } from "../hooks/useAuth";

const ProposalForm = () => {
  const { jobId } = useParams();
  const token = useAuthToken();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    charges: "",
    description: "",
    coverLetter: null,
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "coverLetter") {
      setFormData((prevData) => ({
        ...prevData,
        coverLetter: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    if (!formData.description || !formData.charges) {
      setLoading(false);
      setError("Description and charges are required.");
      return;
    }

    const data = new FormData();
    data.append('description', formData.description);
    data.append('jobId',jobId ); // Assuming jobId is hardcoded for now
    data.append('deadline', '2024-12-31'); // Assuming deadline is hardcoded for now
    data.append('charges', formData.charges);
    data.append('coverLetter', formData.coverLetter);

    try {

      console.log('data : ', data );
      const res = await submitProposal( data , token)

      if (res.data && res.data.success) {
        setLoading(false);
        console.log("Proposal Created: ", res.data);
        setError(null);
        setFormData({
          charges: "",
          description: "",
          coverLetter: null,
        })

        navigate("/")

        
       
      } else {
        setLoading(false);
        setError(res.message || "Failed to create proposal.");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred while creating proposal.");
      console.error("Error creating proposal:", error);
    }
  };

  return (
    <form className="w-full border border-[#dcdad6] bg-slate-50 rounded-xl p-6" >
   
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Description"
          rows="4"
          required
        ></textarea>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row justify-between p-3">
        <div className="p-4 text-center">
          <MonetizationOnIcon
            sx={{ width: 150, height: 150 }}
            className="text-[#a67c00]"
          />
          <p className="text-[#605c5c] text-sm">
            Includes Winwave Fixed-Price Protection.
          </p>
        </div>

        <div className="w-full sm:w-1/2 p-4">
          <label htmlFor="charges" className="block text-black font-bold">
            Total price of project
          </label>
          <p className="text-sm text-[#9a9898]">
            This includes all milestones, and is the amount your client will see
          </p>
          <input
            type="number"
            id="charges"
            name="charges"
            value={formData.charges}
            onChange={handleChange}
            className="shadow my-2 bg-transparent border-b appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="$ 0.00"
            required
          />
        </div>
      </div>

      <hr />

      <div className="my-4">
        <label htmlFor="coverLetter" className="block text-sm font-medium">
          Upload Cover Letter
        </label>
        <input
          type="file"
          id="coverLetter"
          name="coverLetter"
          className="mt-1 block w-full border border-dotted border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2"
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <PrimaryButton
        onClick={handleSubmit}
        children="Create Proposal"
        loading={isLoading}
      />
    </form>
  );
};

export default ProposalForm;
