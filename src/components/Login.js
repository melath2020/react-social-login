import React, { useEffect, useState } from "react";
import "./loginstyle.css";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const Login = () => {
  const [Success, setSuccess] = useState(false);
  const [Logout, setLogout] = useState(false);

  useEffect(() => {
    googleLogout();
  }, [Logout]);
  return (
    <div>
      <div class="container box-width shadow-sm pb-2">
        <div className="text-center">
          <h5 className="mt-5 pt-3 mb-3">Login Here</h5>
          <div className="box bg-light-50  p-2 ">
            <input
              type="text"
              className="form-control"
              placeholder="UserName"
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Password"
            />
          </div>
          <button className="btn-log mt-3">Login</button>
          <hr />
    
           <div className="text-center">
           <GoogleLogin className="w-100"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  setSuccess(credentialResponse);
                  alert("Login Success");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
           </div>
            
              ;
            </div>
            
       
     
      </div>
    </div>
  );
};

export default Login;
