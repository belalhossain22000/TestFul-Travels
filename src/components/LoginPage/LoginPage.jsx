import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from ,{replace:true});
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const googleLogins = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from,{replace:true});
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        navigate(from,{replace:true});
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login to Testful Travels</h1>
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleLogin} className="btn btn-primary">
                  Login 
                </button>
                <p className="text-center my-9 border-b-2 border-t-2 ">or</p>
                <button onClick={googleLogins}  className="btn btn-primary">
                Login with google
                </button>
                <br />
                <button  onClick={handleGithubLogin} className="btn btn-primary">
                login with Github
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
