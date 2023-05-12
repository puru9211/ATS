import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ post }) => {
  return (
    <div className="card">
      <div className="job-title">Role - {post.role}</div>
      <div className="job-req">JOB ID - {post.jid}</div>
      <div className="job-req">Location - {post.location}</div>
      <div className="job-req">Experience - {post.experience}</div>
      <div className="job-actions">
        <NavLink id="viewbtn" to={`/jobs/desc/${post._id}`}>
          View <i class="fa fa-eye" aria-hidden="true"></i>
        </NavLink>
        <NavLink id="applybtn" to="/apply">
          Apply Now <i class="fa fa-external-link" aria-hidden="true"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Cards;
