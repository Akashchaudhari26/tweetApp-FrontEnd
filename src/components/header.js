import React from 'react'

export default function Header() {
    return (
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="d-flex container-fluid">
                    <a className="navbar-brand " href="#">Tweet App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   
                </div>
            </nav>
        </div>
    )
}
