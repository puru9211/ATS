import React, { useState } from "react";
import Navbar from "../resources/components/Navbar";
import axios from "axios";
import Footer from '../resources/components/Footer'

const CheckStatus = () => {
  const [apn, setApn] = useState("")
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const apStatus = await axios.get("/apply/check/" + apn)
      console.log(apStatus);
      setMessage("Your application status is ");
      setStatus(apStatus.data.status)
    } catch (err) {

    }
    console.log("Clicked");
  }

  return (
    <>
      <Navbar />
      <div className="page-title">Check your Application Status</div>
      <div className="page-content">
        <div className="login-box">
          <form>
            <label for="ap-no">Application Number/ID<sup class="star">*</sup></label>
            <input type="text" id="ap-no" name="ap-no" onChange={(e) => setApn(e.target.value)} required
            />
            <button className="submit-btn-1" type="submit" onClick={handleSubmit}>Check Status</button>
            <div className="message-box">
              {message && <p>{message}<span>{status}</span></p>}
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default CheckStatus;
