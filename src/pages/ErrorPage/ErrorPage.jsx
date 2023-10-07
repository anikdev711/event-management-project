import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>404 not found</h1>
            <Link to='/'> <button className="btn btn-neutral text-white font-bold">Go Home</button> </Link>
        </div>
    );
};

export default ErrorPage;