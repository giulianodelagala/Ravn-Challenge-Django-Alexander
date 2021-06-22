import React, { Component } from 'react';

import './Body.css'

class NoticeCell extends Component{

    render(){
        return(
            <div className="NoticeCell">
                <h2 className="highemp">Failed to Load Data</h2>
            </div>  
        );
    }
}

export default NoticeCell;