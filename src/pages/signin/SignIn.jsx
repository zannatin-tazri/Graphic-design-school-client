import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            console.log('Sign In', result.user);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col md:flex-row justify-center items-center gap-10">
                {/* Sign In Form */}
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <h1 className="pr-5 ml-8 mt-4 text-4xl md:text-5xl font-bold">Sign In now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" required />
                            <button className="btn btn-neutral mt-4">Sign In</button>
                        </fieldset>
                    </form>
                    <div>
                        <div className="divider">OR</div>
                        <div className="card bg-base-100 rounded-box grid h-20 place-items-center">
                            <p>Do not have any account ? <Link className='text-green-700' to='/register'> Register</Link></p>
                        </div>
                    </div>
                </div>

                {/* Lottie Animation */}
                <div className="flex justify-center">
                    <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
                        style={{ width: "300px", height: "300px" }}
                    ></lottie-player>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
