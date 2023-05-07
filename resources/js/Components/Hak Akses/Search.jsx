import React from "react";

const Search = () => {
    return (
    <div className="form-control">
        <div className="input-group">
        <select className="select select-bordered bg-white">
       <option disabled selected>Pick category</option>
             <option>T-shirts</option>
             <option>Mugs</option>
             </select>
          <input type="text" placeholder="Search…" className="input input-bordered bg-white" />
          <button className="btn btn-square bg-white hover:bg-gray-100 text-[#C1C0BF] btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
    </div>
    // <div className="form-control rounded-full">
    //     <div className="input-group">
    //         <select className="select select-bordered bg-white">
    //         <option disabled selected>Pick category</option>
    //         <option>T-shirts</option>
    //         <option>Mugs</option>
    //         </select>
    //         <button className="btn bg-white hover:bg-gray-100 text-[#C1C0BF] btn-outline">Go</button>
    //     </div>
    // </div>

    )
}

export default Search