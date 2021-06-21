import React, { Component } from "react";
import LoadingIndicator from 'react-loading-indicator'
import './Body.css'
import PersonCell from './PersonCell'
import DataCell from "./DataCell";

const API = 'http://localhost:8000/';
const QUERY_PEOPLE = 'people/'

class Body extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedPerson : null,
            People : [],
            isLoading : false,
        }
  
    }

    componentDidMount(){
        this.setState( {isLoading: true});
        this.fetchPeople();
    }


    fetchPeople() {
    
        fetch(API + QUERY_PEOPLE)
        .then(response => response.json())
        .then(data => {
            setTimeout( function () {
                this.setState({People: data, isLoading: false});
            }.bind(this),1000 );
        //setTimeout for test only
        }); 
    };

    onPersonSelect(person){
        this.setState({selectedPerson:person});
        console.log(person.name);
    }

    renderPerson(person){
        if (person != null)
        {
            const vehicles = person.vehicles.map( (vehicle) => {
                return (
                    <DataCell cell={ {attribute: vehicle, value: ''}}/>
                );
            } );
        
            return (
                <div className="offset-1 col-10">
                    <div className="SectionHeader">
                        <h2 >General Information</h2>
                    </div>
                    <ul>
                        <DataCell cell={ {attribute:"Eye Color", value: person.eye_color}}/>
                        <DataCell cell={ {attribute:"Hair Color", value: person.hair_color}}/>
                        <DataCell cell={ {attribute:"Skin Color", value: person.skin_color}}/>
                        <DataCell cell={ {attribute:"Birth Year", value: person.birth_year}}/>
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

    render(){
        var people = null;
        if (this.state.isLoading) {
            people =          
                <div className="LoadingCell">
                    <h2 className="emp"><LoadingIndicator className="LoadingIndicator" />Loading</h2>
                </div>               
        }
        else{
            people = this.state.People.map( (person) => {
                return (
                    <div key={person.id}
                        onClick = { () => this.onPersonSelect(person)} >                  
                        <PersonCell              
                            person={person} />        
                    </div>
                );
            } );
        }
        

        return(
            <div className="row">
                <div id="sidebody" className="col-3">
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

