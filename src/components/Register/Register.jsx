import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Register() {
  const [success, setSuccess] = useState(false);
  const [errorM, setErrorM] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const terms = e.target.terms.checked;
    console.log(`${name} || ${photo}`);
    setErrorM("");
    setSuccess(false);

    if (password.length < 6) {
      setErrorM("password should be 6 character");
      return;
    }

    const passRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

    if (!passRegex.test(password)) {
      setErrorM(
        "At least one uppercase, one lowercase, one number, one special character"
      );
      return;
    }

    if (!terms) {
      setErrorM("Pleace accept our terms and conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);

        const profile={
            displayName:name,
            photoUrl:photo,
        }
        updateProfile(auth.currentUser,profile)
        .then(()=>{
            console.log('profile updated')
        })
        .catch((error) => {
            console.log(error)
        })

        sendEmailVerification(auth.currentUser).then(() => {
          console.log("varification mail send");
        });
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorM(error.message);
        setSuccess(false);
      });
  };
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
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="nameame"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPass(!showPass)}
              className="text-xl absolute right-3 top-12"
            >
              {showPass ? (
                <FaRegEyeSlash></FaRegEyeSlash>
              ) : (
                <FaRegEye></FaRegEye>
              )}
            </button>

            <div className="form-control my-2">
              <label className="cursor-pointer flex justify-start items-center gap-4">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-success"
                />
                <span className="label-text">
                  Accept our terms and conditions
                </span>
              </label>
            </div>
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
        {errorM && <p className="text-red-600">{errorM}</p>}
        {success && <p className="text-green-600">Successfuly create a user</p>}
        <p>
          Allready have an account please:{" "}
          <Link to="/login" className="font-bold">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
