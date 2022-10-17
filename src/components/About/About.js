import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>Secret about us!!!</h2>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default About;