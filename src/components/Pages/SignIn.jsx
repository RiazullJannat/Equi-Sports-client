import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, setUser, googleSingIn } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
            .then((res)=>{
                setUser(res.user);
                event.target.reset();
                navigate('/')
            })
            .catch(error=>{
                console.log(error)
            })
    }
    const handleGoogleSignIn = () => {
        googleSingIn()
        .then(()=>{
            navigate(location.state?`${location.state}`:'/')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-sm glass rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
                </h2>
                <form className="space-y-4" onSubmit={handleLogin}>
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered w-full" required />
                    </div>
                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="flex relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered w-full" required />
                            <div className="btn btn-xs absolute right-2 top-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoMdEyeOff /> : <FaEye></FaEye>
                                }
                            </div>
                        </div>
                    </div>
                    {/* Forget Password */}
                    <div className="text-right">
                        <Link to={'/auth/forgetPassword'} className="label-text-alt link link-hover" >Forgot password?</Link>
                    </div>
                    {/* Login Button */}
                    <button className="btn btn-primary w-full">Login</button>
                </form>
                {/* Divider */}
                <div className="divider">OR</div>
                {/* Login with Google */}
                <button className="btn btn-outline btn-accent w-full flex items-center justify-center gap-2"
                    onClick={handleGoogleSignIn}
                >
                    <FcGoogle className="text-xl" />
                    Login with Google
                </button>
                <p className="text-center my-2">Don&apos;t  have an account? <Link to={'/auth/signUp'} className="text-red-600 font-semibold">SignUp</Link></p>
            </div>
        </div>
    );
};

export default SignIn;