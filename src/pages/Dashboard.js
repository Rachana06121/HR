import React from 'react';

import video from '../assets/video.mp4';

const Dashboard = (props) => {

    return (
        <div className="video">
           <h2>Welcome</h2>
            <video src={video} height="150" width="300"/>

        </div>
    );
};

export default Dashboard;