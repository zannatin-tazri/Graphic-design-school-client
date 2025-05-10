import { LottiePlayer } from '@lottiefiles/lottie-player';
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
// import SocialLogin from '../shared/SocialLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form.confirmPassword.value.trim();

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        // Validation
        if (!email || !password || !confirmPassword) {
            setError("All fields are required.");
            setSuccess('');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters and include uppercase, lowercase, number, and symbol.");
            setSuccess('');
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            setSuccess('');
            return;
        }

        setError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                setSuccess("Account created successfully!");
                form.reset();
                console.log(result.user);

                const userInfo = {
                    email: email
                };

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedID) {
                            console.log("user added to db");
                        }
                    });

            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
                console.error(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col-reverse md:flex-row justify-center items-center gap-10">

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <h1 className="pr-5 ml-8 mt-4 text-4xl md:text-5xl font-bold">Sign Up Now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />

                            <label className="label">Confirm Password</label>
                            <input type="password" name='confirmPassword' className="input" placeholder="Confirm Password" required />

                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </fieldset>
                    </form>

                    <div>
                        <div className="divider">OR</div>
                        <div className="card bg-base-100 rounded-box grid h-20 place-items-center">
                            <p>Already have an account ? <Link className='text-green-700' to='/signin'> SignIn</Link></p>
                        </div>
                    </div>
                </div>

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

export default Register;
