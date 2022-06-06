import React from 'react'

export default function Login() {
    return (
        <div className="mt-5 container col-md-4">
            <h4>Login</h4>
            <form>
                <div className="form-outline mb-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>

                <div className="form-outline mb-4">
                    <label for="exampleInputPassword">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Enter password" />

                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <label className="form-check-label" for="form2Example31"> Remember me </label>
                            <input className="ml-2 form-check-input" type="checkbox" value="" id="form2Example31" />
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4 ">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>

                </div>
            </form>
        </div>
    )
}
