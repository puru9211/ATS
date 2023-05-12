import React from "react";
import Cards from "./Cards";

const Jcard = ({ posts }) => {
  return (
    <div className="job-cards">
      {posts.map((p) => (
        <Cards post={p} />
      ))}
    </div>
  );
};

export default Jcard;
