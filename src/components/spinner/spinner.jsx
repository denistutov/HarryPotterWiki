import React from 'react';

import './spinner.scss';
import snitch from '../_assets/snitch.gif';

const Spinner = () => {
    return (
        <div className="snitch-loader">
            <img src={snitch} alt=""/>
            <span>Loading ...</span>
        </div>        
    );
}

export default Spinner;