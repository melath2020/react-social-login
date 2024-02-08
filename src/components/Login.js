import React from 'react'
import './loginstyle.css'
import { GoogleLogin } from '@react-oauth/google';
const Login = () => {
  return (
    <div>
        <div class="container box-width shadow-sm pb-5" >
            <div className="text-center">
                <h5 className='mt-5 pt-3 mb-3'>Login Here</h5>
                <div className="box bg-light-50  p-2 ">
                    <input type="text" className='form-control' placeholder='UserName'/>
                    <input type="text" className='form-control mt-3' placeholder='Password'/>
                </div>
                <hr />
                <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
            
            </div>
          
        </div>
        
      
    </div>
  )
}

export default Login
