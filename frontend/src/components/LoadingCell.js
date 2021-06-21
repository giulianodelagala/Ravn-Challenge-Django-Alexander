import React, { Component } from 'react';
import LoadingIndicator from 'react-loading-indicator'

import './Body.css'

class LoadingCell extends Component{

    render(){
        return(
            <div className="LoadingCell">
                <h2 className="emp"><LoadingIndicator className="LoadingIndicator" />Loading</h2>
            </div>  
        );
    }
}

export default LoadingCell;