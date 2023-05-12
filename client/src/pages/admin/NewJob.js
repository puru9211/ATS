import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../resources/components/AdminNav";

const NewJob = () => {
  const [jid, setJid] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      jid,
      role,
      company,
      location,
      experience,
      desc,
    };

    try {
      const res = await axios.post("/posts", newPost);
      console.log(res);
    } catch (err) { }
  };

  return (
    <div>
      <Navbar />{" "}
      <div className="page-container">
        <div className="page-title">Post a New Job</div>

        <div className="new-job-form">
          <form>
            <label>Job ID</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setJid(e.target.value)}
            />
            <label>Role</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setRole(e.target.value)}
            />
            <label>Company</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setCompany(e.target.value)}
            />
            <label>Location</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setLocation(e.target.value)}
            />
            <label>Experience</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setExperience(e.target.value)}
            />
            <label>Job Description</label>

            <textarea
              theme="snow"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <button className="submit-btn-1" type="submit" onClick={handleSubmit}>
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewJob;
