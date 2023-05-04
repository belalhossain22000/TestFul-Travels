import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";

const LoginPage = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { loginUser, googleLogin, githubLogin,auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = (event) => {
    setError('')
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }
  };
  const googleLogins = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  const handlePassordReset = () =>{

    sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('Password reset email sent')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
    // ..
  });

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-5">Login to Testful Travels</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a onClick={handlePassordReset} href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                  

                </label>
                <p className="mb-5  ms-4 text-red-600 ">{error}</p>

              </div>
              <div className="form-control mt-6">
                <button onClick={handleLogin} className="btn btn-primary">
                  Login
                </button>
                <p className="text-center my-9 border-b-2 border-t-2 ">or</p>
                <button onClick={googleLogins} className="btn btn-primary">
                  sign in with google
                </button>
                <br />
                <button onClick={handleGithubLogin} className="btn btn-primary">
                  sign in with Github
                </button>
                <br />
              </div>
            </form>
            <p className="mb-5  ms-4 ">
              Don't have an account ?{" "}
              <Link className="btn btn-link" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
