import React from 'react';
import axios from 'axios';

const Logout = (props) => {

    let request = axios.get(`/api/logout`)
        .then(request => {
            setTimeout(() => {
                props.history.push('/')
            }, 3000)
        })
    return (
        <div>
            <h1>See you tomorrow!</h1>
        </div>
    );
};

export default Logout;