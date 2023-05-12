import React, { useEffect, useState } from 'react'
import AdminNav from '../../resources/components/AdminNav'
import JobListCard from '../../resources/components/JobListCard'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const JobList = () => {
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
        <div><AdminNav />
            <div className="page-title">Listed Jobs</div>
            <div className='page-content'>
                <JobListCard posts={posts} />
            </div>
        </div>
    )
}

export default JobList