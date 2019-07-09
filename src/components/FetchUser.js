import React, { Component } from 'react'

export default class FetchUser extends Component {
    state = {
        loading: true,
        person: null
    }

    async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({
            person: data.results[0],
            loading: false
        })
    }
    
    render() {
        return (
            <div>
               {this.state.loading || !this.state.person
                    ? (<div> loading..</div>)
                    : (<>
                        <p>Name: {this.state.person.first}</p>
                        <img src={this.state.person.picture.large} alt=""/>
                    </>
                    )
                } 
            </div>
        )
    }
}
