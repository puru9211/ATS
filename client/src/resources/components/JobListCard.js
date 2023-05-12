import React from 'react'
import JobListCardSub from './JobListCardSub'

const JobListCard = ({ posts }) => {
    return (
        <div><div className="ap-cards">
            {posts.map((p) => (
                <JobListCardSub post={p} />
            ))}
        </div></div>
    )
}

export default JobListCard