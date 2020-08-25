import React from 'react'
import {useEffect, useState} from 'react'
import PostDetail from '../components/PostDetail'

export default function SinglePost(props) {
  // tomt objekt eftersom det är det man ska hantera USE STATE
  let [postData, setPostData] = useState( {} )
  let [postDataName, setPostDataName] = useState( {} )
  let [postDataId, setPostDataId] = useState( {} )

  // hämtar specifikt objekt från firebase
  function fetchPost(){
    const postId = props.match.params.id

    // fetch(`https://image-mock-data.firebaseio.com/images/${imageId}.json`)
    fetch(`https://cat-fact.herokuapp.com/facts`)
    .then( res => res.json() )
    .then( result => {
      for (let index = 0; index < 20; index++) {
        if(result.all[index]._id === postId){
          setPostData(result.all[index])
          setPostDataName(result.all[index].user.name)
          setPostDataId(result.all[index].user)
        }
      }
    })
  }

  // obj triggas så fort komponenten körs
  useEffect( () => {
    fetchPost()
  }, [] )

  return (
    <div>
      <PostDetail
        text={postData.text}
        upvotes={postData.upvotes}
        id={postData._id}
        type={ postData.type }
        userId={ postDataId._id }
        fullname={ postDataName.first + " " + postDataName.last }

/>
    </div>
  )
}
