import React from "react";

const Search = () => {
    const search = (key) => {
      console.log('key', key)
    }

    return (
    <div className="form-control">
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Search…" 
            className="input input-bordered bg-white" 
            onChange={(e) => search(e.target.value)}
          />
          <button className="btn btn-square bg-white hover:bg-gray-100 text-[#C1C0BF] btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
    </div>
    )
}

export default Search