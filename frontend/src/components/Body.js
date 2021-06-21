import React, { Component } from "react";
import './Body.css'

import InfiniteScroll from 'react-infinite-scroll-component'

import DataCell from "./DataCell";
import PersonCell from './PersonCell'
import LoadingCell from './LoadingCell'

const API = 'http://localhost:8000/';
const QUERY_PEOPLE = 'people/?page='

class Body extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedPerson : null,
            People : [],
            isLoading : false,
            hasMore: true,
            page: 1
        }
        this.fetchPeople = this.fetchPeople.bind(this);
    }

    componentDidMount(){
        this.setState( {isLoading: true});
        this.fetchPeople();
    }

    fetchPeople() {
        if (this.state.People.length >= 20) {
            this.setState({ hasMore: false });
            return;
        }
        fetch(API + QUERY_PEOPLE + this.state.page)
        .then(response => response.json())
        .then(data => {
            // fake async 1.5sec
            setTimeout( function () {
                this.setState({
                    People: this.state.People.concat(data.results),
                    isLoading: false,
                    page: this.state.page + 1,
                });
                }.bind(this), 1500 );
        console.log(data)
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
            people = <LoadingCell/>
        }
        else{
            people =      
                    <InfiniteScroll
                        dataLength={this.state.People.length}
                        next={this.fetchPeople}
                        hasMore={this.state.hasMore}
                        loader= {<LoadingCell/>}
                        height={480}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                            </p>
                        }
                        >
                        {this.state.People.map((index) => (
                            <div key={index.id}
                            onClick = { () => this.onPersonSelect(index)} >
                                 <PersonCell
                                 person={index} />
                            </div>
                        ))}
                    </InfiniteScroll>
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

