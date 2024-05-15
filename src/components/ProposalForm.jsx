import React, { useState } from "react";

const ProposalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: "",
    jobId: "",
    deadline: "",
    charges: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="jobId"
        value={formData.jobId}
        onChange={handleChange}
        placeholder="Job ID"
      />
      <input
        type="text"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        placeholder="Deadline"
      />
      <input
        type="text"
        name="charges"
        value={formData.charges}
        onChange={handleChange}
        placeholder="Charges"
      />
      <input
        type="file"
        name="coverLetter"
        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.files[0] })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProposalForm;
