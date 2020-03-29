import React, {ChangeEvent, Component, FormEvent} from "react";
import './MyName.css'


class MyName extends React.Component {

    private firstName: string
    private lastName: string

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName)
        this.firstName = firstName
        this.lastName = lastName
    }

    private getFirstName(e: ChangeEvent<HTMLInputElement>): void {
        this.firstName = e.target.value
    }

    private getLastName(e: ChangeEvent<HTMLInputElement>): void {
        this.lastName = e.target.value
    }

    private setName(e: FormEvent) {
            alert("Welcome! " + this.firstName + ", " + this.lastName)
    }

    render() {
        return (
            <div className="MyName">
                <p className="MyName-test" id="welcome">Welcome!</p>
                <form onSubmit={this.setName.bind(this)}>
                    <h1 className="MyName-test">Personal Info</h1>
                    <p className="MyName-title">FirstName:</p>
                    <input type="text" className="MyName-input" onChange={this.getFirstName.bind(this)}/>
                    <p className="MyName-title">Last Name:</p>
                    <input type="text" className="MyName-input" onChange={this.getLastName.bind(this)}/><br/>
                    <input type="submit" className="MyName-input" value="submit"/>
                </form>
            </div>
        )
    }
}

export default MyName