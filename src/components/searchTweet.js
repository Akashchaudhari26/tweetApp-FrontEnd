import React from 'react'

export default function SearchTweet() {
    return (
        <form className="d-flex ml-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Tweet" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}
