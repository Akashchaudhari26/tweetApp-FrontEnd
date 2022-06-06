import React from 'react'
import newyork from '../img/newyork.jpg'
export default function PostTweet() {
  return (
    <div className="media input-group mb-5">
        <img className="align-self-start mr-3 rounded-circle" src={newyork} alt="Generic placeholder image" style={{
                height: "40px",width:"40px" }}/>
        <input type="text" className="form-control" placeholder="What's Happening" aria-label="What's Happening" aria-describedby="button-addon2"/>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Post</button>
        </div>
        </div>
  )
}
