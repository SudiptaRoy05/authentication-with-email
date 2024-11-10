import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import {  useState } from "react";

export default function Register() {
    const [errorM, setErrorM] = useState('');
    
    const handleRegister=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(`${email} || ${password}`);
        setErrorM('');


        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        }).catch(error => {
            console.log("ERROR",error.message);
            setErrorM(error.message);
        })
    }
  return (
    <div className="space-y-6">
        <h1 className="text-center text-5xl font-bold">Register now!</h1>
      <div
        className="card bg-base-100 w-full max-w-sm 
          shrink-0 shadow-2xl mx-auto"
      >
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
            <label className="label">
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
            errorM && <p className="text-red-600">{errorM}</p>
        }
      </div>
    </div>
  );
}
