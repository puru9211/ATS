import React from "react";
import Navbar from "../resources/components/Navbar";
import '../resources/styles/support.css'

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="page-title">Support</div>
      <div className="page-content">
        <div className="support-form">

          <form>
            <label>Name<sup className="star">*</sup></label>
            <input type="text" id="name" name="name" />
            <label>Email Address<sup className="star">*</sup></label>
            <input type="email" id="email" name="email" />
            <label>Phone Number<sup className="star">*</sup></label>
            <input type="tel" id="phone" name="phone" />
            <label>Application ID</label>
            <input type="text" id="ap-id" name="ap-id" />
            <label>Query<sup className="star">*</sup></label>
            <textarea id="query" name="query"></textarea>
            <input className="submit-btn-1" type="submit" value="Submit" />

          </form>


        </div>
      </div >
    </>
  );
};

export default Support;
