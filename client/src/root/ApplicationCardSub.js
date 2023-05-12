import React from 'react'
import { NavLink } from 'react-router-dom'

const ApplicationCardSub = ({ post }) => {
  return (
    <div className="ap-card">
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{post._id}</td>
              <td>{post.email}</td>
              <td>{post.acstatus}</td>
              <td><NavLink to={`/root/admin-details/${post._id}`}>
                View <i class="fa fa-external-link" aria-hidden="true"></i>
              </NavLink></td>

            </tr>

          </tbody>
        </table>
      </div>




    </div>
  )
}

export default ApplicationCardSub