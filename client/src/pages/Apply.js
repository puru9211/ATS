import React, { useState } from "react";
import Navbar from "../resources/components/Navbar";
import axios from "axios";
import Footer from "../resources/components/Footer";

const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [ewb, setEwb] = useState("");
  const [exp, setExp] = useState("");
  const [eab, setEab] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const [jid, setJid] = useState("");
  const [file, setFile] = useState(null);

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newApplication = {
      name,
      email,
      phone,
      dob,
      ewb,
      exp,
      eab,
      salary,
      city,
      jid,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newApplication.resume = filename;
      try {
        await axios.post("/upload", data);
        console.log("Resume Uploaded");
      } catch (err) { }
    }
    try {
      const res = await axios.post("/apply", newApplication);
      console.log(res);
      // window.location.replace("/single-post/" + res.data._id);
      setMessage("Your application is successfully submitted and current status is " + res.data.status + " Please keep this application ID ( " + res.data._id + " ) for future reference");

    } catch (err) { }
  };

  return (
    <>
      <Navbar />
      <div className="page-title">Apply Now</div>
      <div className="page-content">
        <div className="apply-form">
          <form>
            <div className="apply-form-left">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label for="phone">Mobile Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <label for="name">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={(e) => setDob(e.target.value)}
              />
              <label for="city">Current City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />

              <label for="resume">Updated Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="apply-form-right">
              <label for="city">Ever worked here before?</label>
              <input
                type="text"
                id="ewb"
                name="ewb"
                placeholder="Type Yes or No"
                onChange={(e) => setEwb(e.target.value)}
              />
              <label for="city">Experience (if any)</label>
              <input
                type="text"
                id="exp"
                name="exp"
                placeholder="In Months"
                onChange={(e) => setExp(e.target.value)}
              />
              <label for="city">Ever applied before?</label>
              <input
                type="text"
                id="eab"
                name="eab"
                placeholder="Type Yes or No"
                onChange={(e) => setEab(e.target.value)}
              />
              <label for="jid">Job ID</label>
              <input
                type="text"
                id="jid"
                name="jid"
                onChange={(e) => setJid(e.target.value)}
              />
              <label for="jid">Expected Salary</label>
              <input
                type="text"
                id="salary"
                name="salary"
                placeholder="INR"
                onChange={(e) => setSalary(e.target.value)}
              />

            </div>
            <div className="submit-btn">
              <input className="submit-btn-1" type="submit" onClick={handleSubmit} value="Submit" />
            </div>
          </form>


        </div>
        <div className="message-box">
          {message && <p>{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
