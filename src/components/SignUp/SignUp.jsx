import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";

export default function SignUp() {

  
  const handleSignUp =(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential =>{
      const user = userCredential.user;
      console.log(user)
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-12">Sign Up</h2>
      <div className="mt-10 max-w-lg mx-auto">
        
        <form onSubmit={handleSignUp} className="space-y-7">
        <label className="input input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="email" name="email" className="grow" placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          {/* <input type="password" className="grow" value="" /> */}
          <input type="password" placeholder="password"  name="password" id="" />
        </label>
        <button className="btn btn-success w-full">Login</button>
        </form>
        
      </div>
    </div>
  );
}
