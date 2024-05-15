import React, { useState } from "react";
import PrimaryButton from "../common/PrimaryButton";
import { createJob } from "../services/jobs.services";
import { useAuthToken, useClient } from "../hooks/useAuth";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    skills: [],
    projectScope: "",
    timeRequired: "",
    experience: "",
    contractType: "",
    budget: "",
    description: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useAuthToken(); 
  const clientId = useClient();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      // Split the value by comma and trim each skill
      const skillsArray = value.split(",").map(skill => skill.trim());
      setFormData((prevData) => ({
        ...prevData,
        [name]: skillsArray,
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
    if (
      !formData.title ||
      !formData.projectScope ||
      !formData.skills ||
      !formData.timeRequired ||
      !formData.experience ||
      !formData.contractType ||
      !formData.budget ||
      !formData.description
    ) {
      setLoading(false);
      setError("All fields are required.");
      return;
    }

    try {
      const res = await createJob(formData , token);

      if (res.data && res.data.success) {
        setLoading(false);
        console.log("CreateJOB : ", res.data);
        setError(null);
      } else {
        setLoading(false);
        setError(res.message || "Failed to create job.");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred while creating job.");
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="mx-auto flex justify-center">

   
    <form  className="w-full max-w-lg">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">
          Skills
        </label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={formData.skills.join(", ")} // Join skills array with comma and space
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Skills"
        />
      </div>
      <div className="mb-4">
  <label htmlFor="projectScope" className="block text-gray-700 font-bold mb-2">
    Project Scope
  </label>
  <div>
    <label className="inline-flex items-center">
      <input
        type="radio"
        id="projectScopeLarge"
        name="projectScope"
        value="large"
        checked={formData.projectScope === "large"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Large</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        id="projectScopeMedium"
        name="projectScope"
        value="medium"
        checked={formData.projectScope === "medium"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Medium</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        id="projectScopeSmall"
        name="projectScope"
        value="small"
        checked={formData.projectScope === "small"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Small</span>
    </label>
  </div>
</div>

      <div className="mb-4">
        <label
          htmlFor="timeRequired"
          className="block text-gray-700 font-bold mb-2"
        >
          Time Required
        </label>
        <input
          type="text"
          id="timeRequired"
          name="timeRequired"
          value={formData.timeRequired}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Time Required"
        />
      </div>
      <div className="mb-4">
  <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">
    Experience Required
  </label>
  <div>
    <label className="inline-flex items-center">
      <input
        type="radio"
        id="experienceExpert"
        name="experience"
        value="Expert"
        checked={formData.experience === "Expert"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Expert</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        id="experienceIntermediate"
        name="experience"
        value="Intermediate"
        checked={formData.experience === "Intermediate"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Intermediate</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        id="experienceBeginner"
        name="experience"
        value="Beginner"
        checked={formData.experience === "Beginner"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Beginner</span>
    </label>
  </div>
</div>

      <div className="mb-4">
        <label
          htmlFor="contractType"
          className="block text-gray-700 font-bold mb-2"
        >
          Contract Type
        </label>
        <input
          type="text"
          id="contractType"
          name="contractType"
          value={formData.contractType}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Contract Type"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="budget" className="block text-gray-700 font-bold mb-2">
          Budget
        </label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Budget"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
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
        ></textarea>
      </div>
      <PrimaryButton
        onClick={handleSubmit}
        children="Create Job"
        loading={isLoading}
      />
    </form>

    </div>
  );
};

export default ClientForm;
