import React from "react";

function SignUpForm() {
    return (
      <div className="content-body">
        <div className="form shadow p-3 mb-5 bg-white">
            <form className="form-signin">
                <img className="mb-4" src="img/logo.png" alt="brand" />
                <h1 className="h3 mb-3 font-weight-normal">Create Account</h1>
                <label for="inputName" className="sr-only">Your name</label>
                <input type="text" id="inputName" className="form-control" placeholder="Your name" required autofocus />
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
      </div>
    );
}

export default SignUpForm;