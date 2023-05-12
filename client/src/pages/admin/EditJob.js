import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from "../../resources/components/AdminNav";


const EditJob = () => {
    const locationn = useLocation();
    const path = locationn.pathname.split("/")[3];
    const [posts, setPosts] = useState([]);

    const [jid, setJid] = useState("");
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [experience, setExperience] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPosts(res.data);
            setJid(res.data.jid)
            setRole(res.data.role)
            setCompany(res.data.role)
            setLocation(res.data.location)
            setExperience(res.data.experience)
            setDesc(res.data.desc)
        };
        getPost();
    }, [path]);

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${posts._id}`, {
                jid,
                role,
                company,
                location,
                experience,
                desc,
            });
        } catch (err) { }
    };
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${posts._id}`)
            window.location.replace("/");
        } catch (err) { }
    };
    return (
        <div>      <Navbar />{" "}
            <div className="page-container">
                <div className="page-title">Edit: {posts.role}</div>

                <div className="new-job-form">
                    <form>
                        <label>Job ID</label>
                        <input
                            type="text"
                            placeholder=""
                            value={jid}
                            onChange={(e) => setJid(e.target.value)}
                        />
                        <label>Role</label>
                        <input
                            type="text"
                            placeholder=""
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label>Company</label>
                        <input
                            type="text"
                            placeholder=""
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <label>Location</label>
                        <input
                            type="text"
                            placeholder=""
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <label>Experience</label>
                        <input
                            type="text"
                            placeholder=""
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
                        <label>Job Description</label>

                        <textarea
                            theme="snow"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />

                        <button className='submit-btn-1' type="submit" onClick={handleUpdate}>
                            Update
                        </button>
                    </form>
                    <button className='submit-btn-1' type="submit" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div></div>
    )
}

export default EditJob