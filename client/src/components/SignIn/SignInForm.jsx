import React from "react";

function SignInForm() {
    return (
        <div className="content-body">
            <div className="form shadow p-3 mb-5 bg-white rounded">
                <form className="form-signin">
                    <img className="mb-4" src="img/logo.png" alt="brand" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    {/* maybe add a remember login 
                     <div className="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                      </label>
                    </div> */}`
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;