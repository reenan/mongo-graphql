import React, { Component } from 'react'

const API = 'http://localhost:8081/';

export default class PeopleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peopleList: [],
            newPeopleName: ''
        }
    }

    componentDidMount() {
        this.updatePeopleList();
    }

    updatePeopleList = () => {
        fetch(API + 'people').then(async (res) => {
            let peopleList = await res.json();
            this.setState({peopleList});
            
        }).catch((error) => {
            console.error(error);
        })
    }

    deletePeopleList = () => {
        let deletePromiseList = this.state.peopleList.map((item) => {
            return fetch(API + 'people/' + item._id, { method: 'DELETE'});
        });

        Promise.all(deletePromiseList).then(this.updatePeopleList)
    }

    addPeople = () => {
        fetch(API + 'people', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.newPeopleName,
                age: new Date().getTime() % 100
            })
        }).then(() => {
            this.updatePeopleList();

            this.setState({
                newPeopleName: ''
            })
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 
    
    render() {
        const { peopleList, newPeopleName } = this.state;

        return (
            <div>
                <h1>People List</h1>
                <div className='peopleList'>
                    {
                        peopleList.map((item, index) => {
                            return (
                                <div className='people' key={index}>
                                    <span>Name: {item.name}</span>
                                    <span>Age: {item.age}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <input
                    type='text'
                    onChange={this.handleInputChange}
                    name='newPeopleName'
                    value={newPeopleName}
                />
                <button onClick={this.addPeople}>Add People</button>
                <br />
                <br />
                <button onClick={this.updatePeopleList}>Update People List</button>
                <br />
                <button onClick={this.deletePeopleList}>Delete People List</button>
            </div>
        )
    }
}
