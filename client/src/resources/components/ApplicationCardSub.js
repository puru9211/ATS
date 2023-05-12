import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/table.css'

const ApplicationCardSub = ({ post }) => {
  return (
    <div className="ap-card">
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Application ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Status</th>
              <th>Details</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{post._id}</td>

              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.phone}</td>
              <td>{post.city}</td>
              <td>{post.status}</td>
              <td><NavLink to={`/admin/edit-application/${post._id}`}>
                View/Edit <i class="fa fa-external-link" aria-hidden="true"></i>
              </NavLink></td>
              <td>  <NavLink to={`http://localhost:5000/images/${post.resume}`}>
                Download Resume <i class="fa fa-cloud-download" aria-hidden="true"></i>
              </NavLink></td>
            </tr>

          </tbody>
        </table>
      </div>




    </div>
  )
}

export default ApplicationCardSub