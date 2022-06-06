import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";
import UserProfile from './userProfile'
import Tweets from './tweets'
import SearchTweet from './searchTweet'
import { ProfileDetail } from './ProfileDetail';
export default function MainUi() {






    return (
        <Router>
            <div className="container mt-5">


                <div className="row">
                    <div className="col-sm">

                        <UserProfile></UserProfile>
                    </div>

                    <div className="col-6">
                        <Routes>
                            <Route path="/home" element={<Tweets/>}>
                                
                            </Route>
                            <Route path="/profile" element={<ProfileDetail/>}>
                                
                            </Route>
                            
                        </Routes>
                        
                    </div>
                    <div className="col-sm">
                        <SearchTweet></SearchTweet>
                    </div>
                </div>
            </div>
        </Router>
    )
}
