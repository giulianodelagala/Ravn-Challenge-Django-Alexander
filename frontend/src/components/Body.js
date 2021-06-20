import React, { Component } from "react";
import './Body.css'
import PersonCell from './PersonCell'

class Body extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedPerson : null
            
        }
    }

    onPersonSelect(person){
        this.setState({selectedPerson:person});
        console.log(person.name);
    }

    renderPerson(person){
        if (person != null)
        {
            const vehicles = person.vehicles.map( (vehicle) => {
                return (
                    <li>
                        {vehicle}
                    </li>
                );
            } );
        
            return (
                <div>
                    <h2>General Information</h2>
                        <ul>
                            <li className="row">
                                <h2 className="emp col-6">Eye Color</h2>
                                <h2 className="tr col-6">{person.eye_color}</h2>
                                <hr/>
                            </li>
                            <li className="row">
                                <h2 className="emp col-6">Hair Color</h2>
                                <h2 className="tr col-6">{person.hair_color}</h2>
                                <hr/>
                            </li>
                            <li className="row">
                                <h2 className="emp col-6">Skin Color</h2>
                                <h2 className="tr col-6">{person.skin_color}</h2>
                                <hr/>
                            </li>
                            <li className="row">
                                <h2 className="emp col-6">Birth Year</h2>
                                <h2 className="tr col-6">{person.birth_year}</h2>
                                <hr/>
                            </li>                       
                        </ul>
                        
                    <h2>Vehicles</h2>
                    <ul>
                        {vehicles}
                    </ul>
                    
                    
                </div>
            );
        }
        else
            return ( <div></div>);
    }

    render(){
        const people = this.props.people.map( (person) => {
            return (
                <div key={person.id}
                    onClick = { () => this.onPersonSelect(person)} >                  
                    <PersonCell              
                        person={person} />        
                </div>
            );
        } );

        return(
            <div className="row">
                <div id="sidenav" className="col-3">
                    {people}
                </div>
                <div className="col-9">
                    {this.renderPerson(this.state.selectedPerson)}
                </div>
            </div>
            
            
        );
    }
}

export default Body;

