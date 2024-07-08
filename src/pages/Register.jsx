import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';

const Register = () => {

  const { creatUser,updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log('this is register', name, photo, email, password);
    // validation
    if (password.length < 6) {
      toast.error("password must be 6 character")
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      toast.error('Your password should have at least one upper case characters.')
      return;
    }
    else if (!/[a-z]/.test(password)) {
      toast.error('Your password should have at least one lowescase case characters.')
      return;
    }
    // create user
    creatUser(email, password)
      .then(result => {
        updateUserProfile(name, photo)
        .then()
        console.log(result.user);
        toast.success('Successfully Register!')
        
      })
      .catch(error => {
        console.error(error);
        toast.error('email already use');
      })

  }
  return (
    <div>
       <Helmet>
                <title>FoodSharing/Register</title>
            </Helmet>
       <h1 className='text-2xl md:text-5xl text-center font-bold md:mb-4'>
                            {' '}
                            <span className=''>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Plese SignUp!', 'Plese SignUp!', 'Plese SignUp!', 'Plese SignUp!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
            </h1>
    <div className="hero min-h-screen bg-base-200 rounded-2xl mb-10" style={{backgroundImage: 'url(https://i.ibb.co/BwHrH6X/regiseter.jpg)'}} >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Register now!</h1>
          
        </div>
        <div className="card shrink-0 w-full  max-w-md shadow-2xl bg-[#d2f2f8]">
          <form onSubmit={handleRegister} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className=" text-black text-2xl">Name</span>
              </label>
              <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black text-2xl">Email</span>
              </label>
              <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black text-2xl">PhotoURL</span>
              </label>
              <input type="text" name="photo" placeholder="Enter your Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black text-2xl">Password</span>
              </label>
              <div className='relative '>
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered w-full " required />
                <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                  {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }

                </span>
              </div>
           
            </div>
           
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <Toaster />
          </form>
          <p className="text-center mb-4"> Allready have an accoutn? <Link className="text-blue-600 font-bold underline underline" to='/login'> Please Login</Link></p>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Register;