import React from 'react';
//import { Link } from "react-router-dom";

export default function Post({ text, fullname, id, upvotes, userId, type }) {
  return (
    <div className="col-md-4 text-center mb-2">
      <div className="card">
        {/* <img className="card-img-top" src="" alt="" /> */}
        <div className="card-body">
          {/* <p>ID: { id }</p> */}
          {/* <p className="card-text">{ text } 
          <Link to="single-post"> See More</Link></p> */}
          <p className="card-text">{ text }</p>
          <button className="btn btn-primary">
            <span role="img" area-label="heart">♥</span> {upvotes}
          </button>
        </div>
      </div>
    </div>
  )
}
