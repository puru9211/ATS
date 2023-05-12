import React, { useEffect, useState } from "react";
import Navbar from "../resources/components/Navbar";
import Jcard from "../resources/components/Jcard";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from '../resources/components/Footer'
const Jobs = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="page-title-job"><h1>Find your dream job</h1>
        <p></p>
        <form>
          <input type="text" name="search" id="search" placeholder="role, location..." />
          <input type="submit" value='search' />
        </form>
      </div>

      <div className="page-content">
        <h2>Job Openings &rarr;</h2>
        <Jcard posts={posts} />
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
