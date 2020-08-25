import React from 'react'
import { Link } from "react-router-dom";

export default function PostDetail( { text, fullname, id, upvotes, userId, type } ) {
  return (
    <div>

      <div className="card">
        <div className="card-body">
          <p className="card-text">{ text }</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span role="img" area-label="heart">♥</span> {upvotes}</li>
            <li className="list-group-item">Name: {fullname}</li>
            <li className="list-group-item">User-ID: {userId}</li>
            <li className="list-group-item">Fact-ID: {id}</li>
            <li className="list-group-item">Fact-type: {type}</li>
            <li className="list-group-item"><Link to={`../`}>Back</Link></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
