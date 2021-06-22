import React, { Component } from "react";
import './Body.css'

import InfiniteScroll from 'react-infinite-scroll-component'

import PersonCell from './PersonCell'
import LoadingCell from './LoadingCell'
import PersonAttribute from "./PersonAttribute";
import NoticeCell from "./NoticeCell";

import { API, QUERY_PEOPLE } from '../shared/shared'

class Body extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedPerson : null,
            People : [],
            isLoading : false,
            hasMore: true,
            page: 1,
            error: null
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
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error('Something went wrong ...');
            })          
        .then(data => {
            // fake async 1.5sec
            setTimeout( function () {
                this.setState({
                    People: this.state.People.concat(data.results),
                    isLoading: false,
                    page: this.state.page + 1,
                });
                }.bind(this), 1500 );
        })
        .catch(error => this.setState({ error, isLoading: false }));
        ;
    };

    onPersonSelect(person){
        this.setState({selectedPerson:person});
        //console.log(person.name);
    }

    render(){
        var sidebar = null;
        if (this.state.error) {
            sidebar = <NoticeCell/>
        }
        else if (this.state.isLoading) {
            sidebar = <LoadingCell/>
        }
        else{
            sidebar =      
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
                    {sidebar}
                </div>
                <div className="col-9">
                    <PersonAttribute selected={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}

export default Body;

