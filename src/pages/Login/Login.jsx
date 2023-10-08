import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Login = () => {

    const { googleSignIn, signInUsingEmailPassword } = useContext(AuthContext);

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignInUsingEmailPassword = (e) => {
        e.preventDefault();
        const eventLoginForm = new FormData(e.currentTarget);
        const email = eventLoginForm.get('email');
        const password = eventLoginForm.get('password');
        console.log(email, password);

        signInUsingEmailPassword(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className="text-4xl text-center font-extrabold mt-8">Login</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignInUsingEmailPassword}
                            className="card-body">
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
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white font-bold">Login</button>
                            </div>
                        </form>
                        <div>
                            <h3 className="text-xl font-semibold text-center mb-4"> ---OR--- </h3>
                            <button onClick={handleGoogleSignIn}
                                className="btn btn-accent block mx-auto text-white font-bold mb-5">Google Sign in</button>
                            <p className="text-center p-4">Have no account? Please <Link to='/register'><span className="text-blue-600 font-bold">Register</span></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;