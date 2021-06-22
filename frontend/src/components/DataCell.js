import React, { Component } from 'react';
import './Body.css'

class DataCell extends Component{

    render(){
        return(
            <li key={this.props.cell.id} className="DataCell row">
                <h2 className="emp col-6">{this.props.cell.attribute}</h2>
                <h2 className="tr col-6">{this.props.cell.value}</h2>
                <hr className="col-12"/>
            </li>
        );
        
    }

}

export default DataCell;