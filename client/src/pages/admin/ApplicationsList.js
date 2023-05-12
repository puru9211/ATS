import React, { useEffect, useState } from 'react'
import AdminNav from '../../resources/components/AdminNav'
import axios from 'axios';
import ApplicationCard from '../../resources/components/ApplicationCard';
import { useLocation } from 'react-router-dom';

const ApplicationsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/apply/view-all");
            setPosts(res.data);
        };
        fetchPosts();
    });


    return (
        <div><AdminNav />
            <div className="page-title">List of Applications</div>

            <div className='page-content'>
                <ApplicationCard posts={posts} />
            </div></div>
    )
}

export default ApplicationsList