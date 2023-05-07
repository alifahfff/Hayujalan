import React from "react"

const Status = (status) => {
    console.log(status.status.icon)
    return (
        <div className= "stats shadow mr-10">
            <div className="stat">
                <div className="flex justify-between">
                <div className="stat-figure text-4xl w-1/5">{status.status.icon}</div>
                <div className="stat-title mt-2 ml-2 text-white">{status.status.name}</div>
            </div>
            <div className="stat-value ml-2 text-white">{status.status.total}</div>
            </div>
        </div>
    )
}

export default Status