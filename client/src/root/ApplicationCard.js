import React from 'react'
import ApplicationCardSub from './ApplicationCardSub'

const ApplicationCard = ({ posts }) => {
    return (
        <div><div className="ap-cards">
            {posts.map((p) => (
                <ApplicationCardSub post={p} />
            ))}
        </div></div>
    )
}

export default ApplicationCard