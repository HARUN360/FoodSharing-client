

import { useContext } from "react";
import { Link,   useLocation, useNavigate,   } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const {signIn, signInWithGoogle, signIngithub} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location login', location);
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('Login Successfully!');
            // navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error);
            toast.error('something is wrong');
        })
    }
    // google login
    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
        console.error(error);
    })
    }
    // github login
    const handleGithubSignIn = () => {
      signIngithub()
      .then(result => {
        console.log(result.user);
       
        // navigate after login
        navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
        console.error(error);
        
    })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10 rounded-2xl style={{backgroundImage: 'url(https://i.ibb.co/0cW73Km/imagebg.jpg)'}} ">
             <Helmet>
                <title>TravelPulse/Login</title>
            </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
        
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <Toaster />
            </form>
            <p className="text-center my-4"> Do not have an accoutn <Link className="text-blue-600 font-bold underline" to='/register'>Register</Link></p>
             <div className="flex gap-2 justify-center mb-6">
             <p><button onClick={handleGoogleSignIn} className="btn btn-active btn-ghost">Google</button></p>
              <p><button onClick={handleGithubSignIn} className="btn btn-active btn-ghost">Github</button></p>
             </div>
          </div>
        </div>
      </div>
    );
};

export default Login;