import React, { useEffect, useState } from 'react'
import AdminNav from '../../resources/components/AdminNav'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const EditApplication = () => {
    const locationn = useLocation();
    const path = locationn.pathname.split("/")[3];
    const [posts, setPosts] = useState([]);

    const [status, setStatus] = useState("");


    const [message, setMessage] = useState("");

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/apply/edit/" + path);
            setPosts(res.data);
            setStatus(res.data.status)
        };
        getPost();
    }, [path]);

    const handleUpdate = async () => {
        try {
            await axios.put(`/apply/${posts._id}`, {
                status
            });
        } catch (err) { }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newApplication = {
            status
        };

        try {
            const res = await axios.post("/apply", newApplication);
            console.log(res);
            // window.location.replace("/single-post/" + res.data._id);
            setMessage("Your application is successfully submitted and current status is " + res.data.status + " Please keep this application ID ( " + res.data._id + " ) for future reference");

        } catch (err) { }
    };

    return (
        <div><AdminNav />
            <div className="page-title">Change Application Status</div>
            <div className="page-content">
                <div className='details'>
                    Application ID - {posts._id} <br></br>
                    Name - {posts.name} <br></br>
                    Email - {posts.email} <br></br>
                    Phone - {posts.phone} <br></br>
                </div>
                <div className="apply-form">
                    <form>
                        <div className="apply-form-left">
                            <label for="name">Status</label>
                            <input
                                type="text"
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            />


                        </div>
                        <button type="submit" onClick={handleUpdate}>
                            Update &nbsp;<i class="fa fa-external-link" aria-hidden="true"></i>
                        </button>
                    </form>


                </div>
                <div className="message-box">
                    {message && <p>{message}</p>}
                </div>
            </div></div>
    )
}

export default EditApplication