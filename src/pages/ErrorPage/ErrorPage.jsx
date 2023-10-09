import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-orange-600 font-extrabold text-9xl">404</h1>
                <br />
                <p className="text-2xl font-semibold">OOPS THIS PAGE IS NOT FOUND</p>
                <br />
                <Link to='/'> <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Go Home</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;