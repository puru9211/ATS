import React, { useEffect, useState } from 'react'
import RootNav from '../resources/components/RootNav'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AdminDetails = ({ post }) => {
    const locationn = useLocation();
    const path = locationn.pathname.split("/")[3];
    const [posts, setPosts] = useState([]);
    const [acstatus, setAcstatus] = useState([])

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/admin/" + path);
            setPosts(res.data);
            setAcstatus(res.data.acstatus)
        };
        getPost();
    }, [path]);

    const handleUpdate = async () => {
        try {
            await axios.put(`/admin/${posts._id}`, {
                acstatus
            });
        } catch (err) { }
    };

    return (
        <div><RootNav />
            <div className='page-title'>Edit Admin: {posts.email} </div>
            <div className="new-job-form">
                <form>
                    <label>Ac Status</label>
                    <input
                        type="text"
                        placeholder=""
                        value={acstatus}
                        onChange={(e) => setAcstatus(e.target.value)}
                    />
                    <button type="submit" onClick={handleUpdate}>
                        Update
                    </button>
                </form>
            </div>
        </div>

    )
}

export default AdminDetails