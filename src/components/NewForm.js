import React, { Component } from 'react'

export default class NewForm extends Component {
    state = {
        name: '',
        describe: '',
        rememberMe: false,
        title: 'Miss.'
    }

    changeHandler = (event, type, isCheckbox) => {
        let value = event.target.value
        if(type === "name"){
            this.setState({name: value})

        }else if(type === "remember"){
            this.setState({rememberMe: !this.state.rememberMe})

        }else if(type === "title"){
            this.setState({title: value})
        }else{
            this.setState({describe: value})
        }
    }
    /***
     * Previous code handling ^
     * Short handling change
     */

    // inputChangeHandler = (event, fieldName, isCheckbox) => {
    //     this.setState({
    //         [fieldName]: isCheckbox ? event.target.checked :event.target.value
    //     })
    // }

    inputChangeHandler = (event) => {
        const isCheckbox = event.target.type === 'checkbox'
        this.setState({
            [event.target.name]: isCheckbox 
                ? event.target.checked 
                : event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: this.state.name,
            describe: this.state.describe,
            rememberMe: this.state.rememberMe,
            title: this.state.title
        }
        console.log(data, "submit form")
    }

    render() {
        console.log(this.state.name, this.state.describe, this.state.title, this.state.rememberMe)
        return (
            <form onSubmit={this.handleSubmit}>
                <hr/>
                {/* <input 
                    onChange={(event) => this.changeHandler(event, "name")}
                    value={this.state.name}
                /> */}
                <input
                    name="name" 
                    onChange={this.inputChangeHandler}
                    value={this.state.name}
                />
                <textarea
                    name="describe"
                    onChange={this.inputChangeHandler}
                    value={this.state.describe}
                />
                <input
                    name="rememberMe"
                    type="checkbox"
                    checked={this.state.rememberMe}
                    onClick = {this.inputChangeHandler}
                />
                <select 
                    name="title"
                    value={this.state.title}
                    onChange={this.inputChangeHandler}
                >
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Miss.</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        )
    }
}
