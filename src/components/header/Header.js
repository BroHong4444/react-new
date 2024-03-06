import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around py-4 bg-blue-500
        backdrop-blur-md shadow-md w-full
        fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-gray-200 font-bold">
                    <Link to="/">React News</Link>
                </h1>
                <div className="flex flex-row space-x-6">
                    <a className="font-semibold text-white text-base">
                        <Link to="/course">Course</Link>
                    </a>
                    <a className="font-semibold text-white text-base">
                        <Link to="/category">Category</Link>
                    </a>
                    <a className="font-semibold text-white text-base">
                        <Link to="/it-news">IT News</Link>
                    </a>
                    <a className="font-semibold text-white text-base">
                        <Link to="/free-course">Free Course</Link>
                    </a>
                </div>
                <div className="flex flex-row space-x-6">
                    <a className="font-semibold text-white text-base">
                        <Link to="/sign-up">SignUp</Link>
                    </a>
                    <a className="font-semibold text-white text-base">
                        <Link to="/sign-in">SignIn</Link>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;