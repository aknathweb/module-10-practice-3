import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

// here Children mean, components data
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        console.log('loading found');
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }
    // if condition not true than, go to login page and save the state location information for next use
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoute;