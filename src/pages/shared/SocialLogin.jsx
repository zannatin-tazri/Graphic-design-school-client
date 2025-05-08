import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext);

    const handleGoogleSign= ()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSign}className='btn'>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;