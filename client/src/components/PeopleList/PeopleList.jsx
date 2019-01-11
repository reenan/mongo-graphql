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

    requestMockQuotasData = () => {
        fetch(API + 'q').then(async (res) => {
            let subaccounts = await res.json();
            console.log('full subaccounts list: ', subaccounts);

            let knownServices = ['iot', 'iotae-sb'];
            let assignedQuotas = [];

            for (let i = 0; i < subaccounts.length; i++) {
                let subaccount = subaccounts[i];

                // Subaccount has an environment object with another "subaccount" object inside which
                // contains the env and quotas data
                let quotas = subaccount.environment.subaccount.quota;

                for (let j = 0; j < quotas.length; j++) {
                    let quota = quotas[j];

                    if (knownServices.indexOf(quota.type) !== -1) {
                        if (assignedQuotas[quota.productId] === undefined) {
                            assignedQuotas[quota.productId] = quota.originalAmount;
                        } else {
                            assignedQuotas[quota.productId] += quota.originalAmount;
                        }
                    }
                }
            }

            console.log('assignedQuotas: ', assignedQuotas);
        });
    }

    requestMockServicesData = () => {
        fetch(API + 't').then(async (res) => {
            let services = await res.json();
            console.log('full services list: ', services);
            
            let knownServices = ['iot', 'iotae-sb'];
            let uniqueRegions = [];

            for (let i = 0; i < services.length; i++) {
                let service = services[i];

                if (knownServices.indexOf(service.type) !== -1) {
                    
                    for (let j = 0; j < service.regions.length; j++) {
                        let region = service.regions[j];
                        
                        if (region.env === 'CLOUD_FOUNDRY') {

                            let planData = {
                                code: service.code,
                                productId: service.productId,
                                amount: service.amount,
                                //isUnlimitedAmount: service.isUnlimitedAmount,
                            };

                            if (uniqueRegions[region.name] === undefined) {
                                uniqueRegions[region.name] = [];
                            }

                            if (uniqueRegions[region.name][service.type] === undefined) {
                                uniqueRegions[region.name][service.type] = {
                                    category: service.category,
                                    //releaseStage: service.releaseStage,
                                    //state: service.state,
                                    description: service.description,
                                    name: service.name,
                                    plans: [planData]
                                };
                            } else {
                                uniqueRegions[region.name][service.type].plans.push(planData);
                            }
                        }
                    }
                }
            }

            console.log('uniqueRegions', uniqueRegions);

        })
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
                <br />
                <button onClick={this.requestMockServicesData}>Test services formatter</button>
                <br />
                <button onClick={this.requestMockQuotasData}>Test quotas formatter</button>

            </div>
        )
    }
}
