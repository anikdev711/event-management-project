/* eslint-disable no-useless-escape */

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';



const Register = () => {

    const { signUpUsingEmailPassword } = useContext(AuthContext);
    const [eventRegisterError, setEventRegisterError] = useState('')

    const handleSignUpUsingEmailPassword = (e) => {
        e.preventDefault();
        const eventForm = new FormData(e.currentTarget);
        const name = eventForm.get('name');
        const email = eventForm.get('email');
        const password = eventForm.get('password');
        console.log(name, email, password);

        if (password.length < 6) {
            // console.log('password should not be less than 6 characters');
            setEventRegisterError('Password should not be less than 6 characters');
        }
        else if (!/[A-Z]/.test(password)) {
            // console.log('Password must have capital letter');
            setEventRegisterError('Password must have at least one capital letter');
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            // console.log('password should have special character');
            setEventRegisterError('Password should have at least one special character');
        }
        else {
            // create user
            signUpUsingEmailPassword(email, password)
                .then((result) => {
                    console.log(result.user);
                    swal("Good job!", "Registration successful", "success");

                })
                .catch((error) => {
                    console.log(error);
                    swal("Try again", "Registration failed", "error");
                })
        }

    }


    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center mt-8">Register Now</h1>
            
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUpUsingEmailPassword}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered" required />
                            </div>
                            <div>
                                {eventRegisterError && <p>{eventRegisterError}</p> }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white font-bold">Register</button>
                            </div>
                            <div>
                                <p>Already have account? Please <Link to='/login'><span className="text-blue-600 font-bold">Login</span></Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;