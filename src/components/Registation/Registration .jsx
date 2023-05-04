import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const { registerUser,auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    console.log(email, name, password, photo, confirmPassword);
    setError('')

    if(!name){
      setError('please enter your name')
      return
    }
   else if(!email){
      setError('please enter a valid email address')
      return
    }
   else if(!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)){
      setError('please enter a valid email address')
      return
    }
   else if(!password){
      setError('please enter minimum  6 digit password')
      return
    }
   
    else if(password!==confirmPassword){
      setError('passworn dosent matching')
      return
    }
    else if(password.length!==6){
      setError('password is too short it should be 6 characters')
      return
    }
    

    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setError(error.message)
              console.log(error.message)
            });

          console.log(result.user);
          navigate("/login");
          
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
        });
    }
      
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mb-24 mt-12">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className=" text-5xl font-bold my-5">
              Please Registration Testful Teravels!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  name="photo"
                  type="text"
                  placeholder="Photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleRegistration}
                  className="btn btn-primary"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mb-5  ms-4 text-red-600 ">
            {error}
            </p>
            <p className="mb-5  ms-4  ">
              Allready have an account?
              <Link className="btn btn-link" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
