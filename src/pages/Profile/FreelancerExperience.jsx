import React, { useState } from "react";
import PrimaryButton from "../../common/PrimaryButton";
import Skills from "./Skills";
import { createFreelancerProfile } from "../../services/profile.services";
import { useAuthToken } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const experienceArr = [
  {
    exp: "Beginner",
    desc: "I am Brand New to this",
  },
  {
    exp: "Intermediate",
    desc: "I have some Experience.",
  },
  {
    exp: "Expert",
    desc: "I am an Expert.",
  },
];

const FreelancerExperience = () => {
  const navigate = useNavigate();
  const [experience, setExperience] = useState("Beginner"); // Initialize with "Beginner"
  const [loading, setLoading] = useState(false);
  const token = useAuthToken();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleSelectedSkillsChange = (skills) => {
    setSelectedSkills(skills);
  };

  const [error, setError] = useState(null);

  const handleExperienceChange = (value) => {
    setExperience(value);
  };

  const handleNext = async () => {
    setLoading(true);

    try {
      const res = await createFreelancerProfile(
        { experience, selectedSkills },
        token
      );

      if (res.data && res.data.success) {
        setLoading(false);
        navigate("/");
        console.log("SuccessResponse : ", res.data);
      } else {
        setLoading(false);
        setError(res.message);
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred while Freelacer profile.");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-5 my-4 mx-10">
      <div className="">
        <div className="sm:w-3/5">
          <h1 className="my-5 text-4xl font-medium">
            A few quick questions: first, have you freelanced before?
          </h1>
          <p className="text-lg my-3 font-normal">
            This lets us know how much help to give you along the way. We won’t
            share your answer with anyone else, including potential clients.
          </p>
        </div>

        <div className="mt-8 flex gap-4 justify-between">
          {experienceArr.map((data) => (
            <div
              key={data.exp}
              className={`w-1/3 py-6 px-5 rounded-lg border-2 ${
                experience === data.exp
                  ? "border-[#00B386] text-[#00B386]"
                  : "border-black-500 text-black-500"
              }`}
              onClick={() => handleExperienceChange(data.exp)}
            >
              <div className="my-1 flex justify-between items-center">
                <p className="font-bold uppercase">{data.exp}</p>
                <input
                  type="radio"
                  value={data.exp}
                  checked={experience === data.exp}
                  onChange={() => handleExperienceChange(data.exp)}
                />
              </div>
              <p className="mt-8 text-xl">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-20">
        <h1 className="my-5 sm:w-3/5 text-4xl font-medium">
          Craft Your Freelance Path: Select Your Expertise
        </h1>
        <p className="text-lg sm:w-3/5 text=[#44475B] my-3 font-normal">
          Empower your freelance journey by handpicking the skills that define
          your expertise and passion
        </p>
      </div>

      <Skills onSelectedSkillsChange={handleSelectedSkillsChange} />

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-end pr-2">
        <PrimaryButton
          onClick={handleNext}
          loading={loading}
          children={"Next, Create the Profile"}
        />
      </div>
    </div>
  );
};

export default FreelancerExperience;
