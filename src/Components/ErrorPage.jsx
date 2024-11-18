
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center items-center py-auto space-y-6'>
                <h3 className='font-bold text-2xl'>404 - PAGE NOT FOUND</h3>
                <p>The page you are looking for might have been removed <br /> had it's name changed or is temporarily unavailable</p>
                <Link to="/" className='btn btn-primary'>Go To Homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;