import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

  const [success, setSuccess] = useState(false);
  const [loginErr, setLoginErr] = useState('');
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setSuccess(false);
    setLoginErr(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if(!result.user.emailVerified){
          setLoginErr('Please verify your email')
        }else{
          setSuccess(true);
        }
      })
      .catch((error) => {
        setLoginErr(error.message);
        console.log(error.message);
      });
  };


  const handleForgetPassword=()=>{
    console.log('Get me email', emailRef.current.value)
    const email = emailRef.current.value
    if(!email){
      console.log('please provide a valid email');
    }
    else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert('reset email send check mailbox')
      })
    }
  }


  return (
    <div>
      <div className="hero bg-base-200  my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label onClick={handleForgetPassword} className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {
              success && <p className="text-green-600">User Login successfull</p>
            }{
              loginErr && <p className="text-red-600">{loginErr}</p>
            }

            <p>New to this website please: <Link className="font-bold" to='/register'>sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
