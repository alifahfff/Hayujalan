import React from "react"

const Status = (status) => {
    console.log(status.status.icon)
    return (
        <div className="stats shadow mr-10">
            <div className="stat">
            <div className="stat-title">{status.status.name}</div>
            <div className="stat-value">{status.status.total}</div>
            </div>
        </div>
    )
}

export default Status