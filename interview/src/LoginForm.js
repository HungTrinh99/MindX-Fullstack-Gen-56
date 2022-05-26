import React from "react";

/*
    LOGIN FORM
    
    - Guidelines 
        * You have an incomplete login form
        * You are not allowed to add additional HTML elements
        * You are not allowed to use refs
    
    - Tasks
        
        * The login button should trigger the login() action imported
        * Disabled the Login button if email is blank OR if password is under 6 letters
        * Disable the login button while login action is being performed
        * Show an error message from the login() if login failed. The error should be clear every user re-attemps to log in
        * Show an alert box (native Javascript alert) if login succeeds. 
        

*/

const LoginForm = () => {
  return (
    <div className="container py-3">
      <h1 className="text-center">Login form</h1>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input type="email" id="email" className="form-control" />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" className="form-control" />
        </div>

        {/* Submit button */}
        <button type="button" className="btn btn-primary btn-block mb-4 mt-5">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
