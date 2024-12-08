import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";



const SignUp = () => {
    const { signUp, setUser, updateUser, setLoading, googleSingIn } = useContext(AuthContext)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const name = form.get('name');
        const photo = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        if(!passwordRegex.test(password)){
            toast.error('Add a valid password!')
        }
        signUp(email, password)
            .then(res => {
                setUser(res.user)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                        toast.success('Successfully SignUp')
                    })
                    .catch(error => {
                        toast.error(error.message)
                    })
            })
            .catch(error => {
                setLoading(false)
                toast.error(error)
            })
    }
    const handleGoogleSignIn = () => {
        googleSingIn()
            .then(()=>{
                navigate('/')
                toast.success('Successfully SignUp')
            })
            .catch(error=>{
                toast.error(error.message)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md  shadow-md rounded-lg p-6 glass">
                <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="photoUrl">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            id="photoUrl"
                            name="photoUrl"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="flex items-center mb-6">
                        <input type="checkbox" name="terms" className="checkbox checkbox-primary mr-2" />
                        <label htmlFor="terms" className="text-sm text-white">
                            Accept <span className="font-semibold">Term & Conditions</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-neutral w-full">
                        Register
                    </button>
                </form>
                <button className="btn btn-outline my-3 btn-accent w-full flex items-center justify-center gap-2"
                    onClick={handleGoogleSignIn}
                >
                    <FcGoogle className="text-xl" />
                    Login with Google
                </button>
                <p className="text-center">All ready have an account? <Link to={'/signIn'} className="text-red-600 font-semibold">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;