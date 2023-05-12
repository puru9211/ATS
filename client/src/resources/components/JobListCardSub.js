import React from 'react'
import { NavLink } from 'react-router-dom'

const JobListCardSub = ({ post }) => {

    return (
        <div className="ap-card">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Job ID</th>
                            <th scope="col">Role</th>
                            <th scope="col">Company</th>
                            <th scope="col">Location</th>
                            <th scope="col">Experience</th>
                            <th scope="col">View</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Job ID">{post.jid}</td>
                            <td data-label="Role">{post.role}</td>
                            <td data-label="Company">{post.company}</td>
                            <td data-label="Location">{post.location}</td>
                            <td data-label="Experience">{post.experience}</td>

                            <td data-label="View"><NavLink to={`/jobs/desc/${post._id}`}>
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </NavLink></td>
                            <td data-label="edit">  <NavLink to={`/admin/edit-job/${post._id}`}>
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </NavLink></td>

                        </tr>

                    </tbody>
                </table>
            </div>




        </div>
    )
}

export default JobListCardSub