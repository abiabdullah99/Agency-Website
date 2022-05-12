import React from 'react';
import CLinet from '../../../images/logos/airbnb.png'
import CLinet2 from '../../../images/logos/google.png'
import CLinet3 from '../../../images/logos/netflix.png'
import CLinet4 from '../../../images/logos/slack.png'
import CLinet5 from '../../../images/logos/uber.png'
const Client = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-20 lg:px-28 px-10 items-center mt-20 lg:ml-28">
            <img src={CLinet} alt="" />
            <img src={CLinet2} alt="" />
            <img src={CLinet3} alt="" />
            <img src={CLinet4} alt="" />
            <img src={CLinet5} alt="" />
        </div>
    );
};

export default Client;