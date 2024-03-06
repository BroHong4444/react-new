import { Link } from "react-router-dom";

const SignInPage = () => {
    return(
        <div className="container mx-auto py-8 mt-14">
            <h1 className="text-2xl font-bold mb-6 text-center">SignIn Form</h1>
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email" id="email" name="email" placeholder="john@example.com"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password" id="password" name="password" placeholder="********"/>
            </div>
            <div className="mb-4">
                <div className="flex justify-between">
                    <span className="font-semibold text-blue-500 cursor-pointer">Forgot password</span>
                    <span className="font-semibold text-blue-500"><Link to="/sign-up" >Sign Up</Link></span>
                </div>
            </div>
            <button
                className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                type="submit">Register</button>
            </form>
        </div>
    )
}
export default SignInPage;