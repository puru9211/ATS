import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ApplicationCard from './ApplicationCard';
import AdminNav from '../resources/components/RootNav'

const AdminList = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/admin" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <div><AdminNav />
            <div className="page-title">Admin Accounts</div>
            <div className='page-content'>
                <ApplicationCard posts={posts} />
            </div>
        </div>
    )
}

export default AdminList