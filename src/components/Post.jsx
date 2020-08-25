import React from 'react';
import { Link } from "react-router-dom";

export default function Post({ text, fullname, id, upvotes, userId, type }) {

  // render description at appropriate time
  function renderDescription(){
    let shortText = JSON.stringify(text).substr(1, 21);
    return <p className="card-text">{ shortText }...</p>
  }

  return (
    <div className="col-md-4 text-center mb-2">
      <div className="card">
        <div className="card-body">
          {renderDescription()}
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><Link to={`/single-post/${id}`}>More info</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
