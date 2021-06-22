import React, { Component } from 'react';
import './Body.css'

import DataCell from "./DataCell";

import { API, QUERY_PERSON } from '../shared/shared'

class PersonAttribute extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            person: null,
            id : -1
        }
    }
    
    fetchPerson() {
        
        fetch(API + QUERY_PERSON + this.props.selected.id + '/')
        .then(response => response.json())
        .then(data => {
            // fake async 1.sec
            setTimeout( function () {
                this.setState({
                    person: data,
                    id: this.props.selected.id
                });
                }.bind(this), 1000 );
        });
    };
    
    render(){
        const person = this.state.person;
        if (this.props.selected && this.props.selected.id !== this.state.id)
        {
            this.fetchPerson()
            console.log(this.props.selected.id)
        }

        if (person != null)
        {
            const vehicles = person.vehicles.map( (vehicle) => {
                return (

                    <DataCell cell={ {
                        id: vehicle.id,
                        attribute: vehicle.name,
                        value: ''}}/>
                );
            } );
    
            return (
                <div className="offset-1 col-10">
                    <div className="SectionHeader">
                        <h2 >General Information</h2>
                    </div>
                    <ul>
                        <DataCell cell={ {id:1,attribute:"Eye Color", value: person.eye_color}}/>
                        <DataCell cell={ {id:2,attribute:"Hair Color", value: person.hair_color}}/>
                        <DataCell cell={ {id:3,attribute:"Skin Color", value: person.skin_color}}/>
                        <DataCell cell={ {id:4,attribute:"Birth Year", value: person.birth_year}}/>
                    </ul>
    
                    <div className="SectionHeader">
                        <h2 >Vehicles</h2>
                    </div>
                    <ul>
                        {vehicles}
                    </ul>
                </div>
            );
        }
        else
            return ( <div></div>);
    }

}

export default PersonAttribute;