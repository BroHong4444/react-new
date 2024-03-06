import { Link } from "react-router-dom";

const SignUpPage = () => {
    return(
        <div className="container mx-auto py-8 mt-14">
            <h1 className="text-2xl font-bold mb-6 text-center">SignUp Form</h1>
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="name" name="name" placeholder="John Doe"/>
            </div>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
            </div>
            <div className="mb-4">
                <p className="text-right font-semibold text-blue-500"><Link to="/sign-in">Sign In</Link></p>
            </div>
            <button
                className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                type="submit">Register</button>
            </form>
        </div>
    )
}
export default SignUpPage;