import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import newyork from '../img/newyork.jpg'

export default function UserProfile(props) {
  
  return (

      
      <div className="mr-5">

        <img className="rounded-circle mb-2" src={newyork} alt="" style={{
          height: "100px",width:"100px" }}/>
        <h5> Akash Chaudhari</h5>

        <div className="mt-3">
          <div className="list-group" id="list-tab" role="tablist">
            <Link className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" to="/" role="tab" aria-controls="home" >Home</Link>
            <Link className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" to="/profile" role="tab" aria-controls="profile" >Profile</Link>
            <Link className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" to="/messages" role="tab" aria-controls="messages" >Messages</Link>
            <Link className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" to="/settings" role="tab" aria-controls="settings" >Settings</Link>
            <Link className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" to="#list-settings" role="tab" aria-controls="logout" >Logout</Link>

          </div>
        </div>

      </div>

    
  )
}
