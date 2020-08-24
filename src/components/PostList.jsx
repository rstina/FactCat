import React from 'react';
import {useState, useEffect} from 'react'
import Post from '../components/Post';

export default function PostList() {

  // måste sättas som tom array tills vi fått ett svar
  let [postList, setPostList] = useState([])

  function fetchCatFacts() {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json())
    .then(result => {
      setPostList(result.all)
    })
  }

  useEffect( () => {
    fetchCatFacts()
  }, [] )

  return (
    <div>
      <div className="card-box row">
        {
          postList.map( ( item, index ) => {
            // console.log(item.user.name.first)
            if(index < 20){
              return <Post 
                key={index}
                id={item._id}
                text={ item.text } 
                type={ item.type }
                userId={ item.user._id }
                fullname={item.user.name.first + " " + item.user.name.last}
                upvotes={ item.upvotes } 
              />
            }
          })
        }
      </div>
    </div>
  )
}