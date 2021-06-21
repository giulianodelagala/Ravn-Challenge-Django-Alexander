import React, { Component } from 'react';
import './Body.css'

class PersonCell extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         person: null
    //     }
    // }
    
    render() {
        const person = this.props.person;
        return(
            <div className="PersonCell">
                <h2>{person.name}</h2>
                <p className="p1 emp">{person.species} from {person.homeworld}</p>
                <hr/>
            </div>          
                
        );
    }
}

export default PersonCell;